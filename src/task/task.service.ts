import { Injectable, NotFoundException } from '@nestjs/common'
import axios from 'axios'
import dayjs from 'dayjs'
import isoWeek from 'dayjs/plugin/isoWeek'
import { Prisma } from 'prisma/generated/client'
import { HistoryService } from 'src/history/history.service'
import { PrismaService } from 'src/prisma.service'
// import { ReportTaskService } from 'src/report-task/report-task.service'
import { UserService } from 'src/user/user.service'

const STATUS_IN_PROGRESS = ['created', 'todo', 'progress']

const statusMap: { [key: string]: string } = {
  planned: 'Запланировано',
  progress: 'В процессе',
  end: 'Завершено'
}

const priorityMap: { [key: string]: string } = {
  urgently: 'Срочно',
  high: 'Высокий',
  normal: 'Средний',
  low: 'Низкий'
}

@Injectable()
export class TaskService {
  constructor(
    private prisma: PrismaService,
    private historyService: HistoryService,
    // private reportTaskService: ReportTaskService,
    private userService: UserService
  ) {}

  // private pythonApiUrl = 'http://localhost:8000/assign-tasks/'

  private async getEmployeeLoad(employee) {
    let totalLoad = employee.tasks.reduce((sum, task) => {
      if (STATUS_IN_PROGRESS.includes(task.status)) {
        const dailyLoad = this.getRemainingTime(employee, task)
        return sum + dailyLoad
      }
      return sum
    }, 0)

    // Учитываем отпуска
    if (employee.unavailableDates) {
      const unavailableDays = employee.unavailableDates.length
      totalLoad += unavailableDays * employee.assigned_hours // добавление "недоступных" часов
    }

    // Учитываем индивидуальные часы работы
    if (employee.workingHours) {
      const dailyHours = this.calculateWorkingHours(employee.workingHours)
      totalLoad = totalLoad / dailyHours
    }

    return totalLoad
  }

  private calculateWorkingHours(workingHours: { start: string; end: string }) {
    const start = dayjs(workingHours.start, 'HH:mm')
    const end = dayjs(workingHours.end, 'HH:mm')
    return end.diff(start, 'hours')
  }

  private mapEmployees(employees) {
    return employees.map(employee => ({
      id: employee.userId,
      timezone_offset: employee.timezone.offset,
      assigned_hours: this.getEmployeeLoad(employee),
      department_id: employee.departmentId,
      vacation_days: employee.vacationDays,
      working_hours: employee.working_hours
    }))
  }

  private async distributeTasks(tasks, employees, createUser, oldTask?) {
    const response = await axios.post(process.env.PYTHON_API_URL, {
      tasks,
      employees
    })
    console.log('Ответ от Python API:', response.data)

    for (const updatedTask of response.data.assigned_tasks) {
      if (updatedTask.assigned_to) {
        await this.prisma.task.update({
          where: { taskId: updatedTask.id },
          data: { userId: updatedTask.assigned_to }
        })

        const user = await this.prisma.user.findUnique({
          where: { userId: updatedTask.assigned_to }
        })
        await this.historyService.create({
          taskId: updatedTask.id,
          userId: updatedTask.assigned_to,
          departmentId: updatedTask.departmentId,
          comment: `${oldTask ? 'Перераспределение задачи' : 'Назначение задачи'}: ${user?.name}`,
          createdAt: new Date().toISOString(),
          createdByUserId: createUser.userId,
          createdByDepartmentId: createUser.departmentId
        })
      }
    }
  }

  private async logTaskChanges(
    taskId,
    changes,
    userId,
    departmentId,
    createUser
  ) {
    if (changes.length) {
      await this.historyService.create({
        taskId,
        userId,
        departmentId,
        comment: changes.join('; '),
        createdAt: new Date().toISOString(),
        createdByUserId: createUser.userId,
        createdByDepartmentId: createUser.departmentId
      })
    }
  }

  private getRemainingTime(employee, task) {
    const taskHistory = task.history.filter(h => h.userId === employee.userId)
    const hoursSpentByEmployee = taskHistory.reduce(
      (sum, record) => sum + (record.hoursSpent ?? 0),
      0
    )

    const now = new Date()
    const dueDate = new Date(task.dueDate)
    const daysBetween = (dueDate.getTime() - now.getTime()) / (1000 * 3600 * 24)

    const remaining = Math.max(
      0,
      (task.estimatedHours ?? 0) - hoursSpentByEmployee
    )

    if (daysBetween <= 0) {
      return remaining // Дедлайн сегодня/прошёл — нагрузка вся сейчас
    }

    const dailyLoad = remaining / daysBetween
    return dailyLoad
  }

  private async getEmployeeWeeklyLoad(employeeId: number): Promise<number> {
    dayjs.extend(isoWeek)
    const startOfWeek = dayjs().startOf('isoWeek').toDate()
    const endOfWeek = dayjs().endOf('isoWeek').toDate()

    const activeTasks = await this.prisma.task.findMany({
      where: {
        userId: employeeId,
        status: { in: ['progress'] }
      },
      select: {
        estimatedHours: true,
        dueDate: true,
        taskId: true,
        history: {
          where: { userId: employeeId },
          select: { hoursSpent: true }
        }
      }
    })

    let totalHours = 0

    for (const task of activeTasks) {
      const spent = task.history.reduce(
        (sum, record) => sum + (record.hoursSpent ?? 0),
        0
      )
      const remaining = Math.max(0, (task.estimatedHours ?? 0) - spent)

      if (task.dueDate >= startOfWeek) {
        totalHours += remaining
      }
    }

    return totalHours
  }

  async create(createTaskDto, createUser) {
    const { historyIds, reportIds, assignmentDate, dueDate, ...taskData } =
      createTaskDto

    const lastTask = await this.prisma.task.findFirst({
      where: {
        status: createTaskDto.status,
        projectId: createTaskDto.projectId
      },
      orderBy: { order: 'desc' }
    })

    const task = await this.prisma.task.create({
      data: {
        ...taskData,
        assignmentDate: assignmentDate ? new Date(assignmentDate) : new Date(),
        dueDate: dueDate ? new Date(dueDate) : undefined,
        order: lastTask ? lastTask.order + 1 : 0
      }
    })

    await this.historyService.create({
      taskId: task.taskId,
      comment: `Задача создана ${task.name}`,
      createdByUserId: createUser.userId,
      createdByDepartmentId: createUser.departmentId,
      createdAt: new Date().toISOString()
    })

    if (!task.dueDate) throw new Error('Не указан дедлайн для задачи')

    const users = this.mapEmployees(
      await this.prisma.user.findMany({
        select: {
          userId: true,
          timezone: { select: { offset: true } },
          departmentId: true,
          tasks: {
            select: { hoursSpent: true, estimatedHours: true, status: true }
          }
        }
      })
    )

    // Теперь для каждого сотрудника считаем актуальную нагрузку на неделю
    const employees = await Promise.all(
      users.map(async user => {
        const assignedHours = await this.getEmployeeWeeklyLoad(user.userId)
        return {
          userId: user.userId,
          timezone: user.timezone,
          departmentId: user.departmentId,
          assigned_hours: assignedHours
        }
      })
    )

    await this.distributeTasks(
      [
        {
          id: task.taskId,
          deadline: task.dueDate,
          priority: task.priority,
          estimated_hours: task.estimatedHours ?? task.hoursSpent ?? 0,
          started: ['progress', 'end'].includes(task.status),
          department_id: task.departmentId
        }
      ],
      employees,
      createUser
    )

    return task
  }

  async update(taskId, updateTaskDto, createUser) {
    const oldTask = await this.getById(taskId)
    if (!oldTask) throw new NotFoundException('Задача не найдена')

    const {
      userId,
      historyIds,
      reportIds,
      status,
      priority,
      departmentId,
      projectId,
      hoursSpent,
      ...taskData
    } = updateTaskDto

    const changes = []
    if (status && status !== oldTask.status)
      changes.push(
        `Статус изменён: ${statusMap[oldTask.status]} → ${statusMap[status]}`
      )
    if (priority && priority !== oldTask.priority)
      changes.push(
        `Приоритет изменён: ${priorityMap[oldTask.priority]} → ${priorityMap[priority]}`
      )

    if (userId && userId !== oldTask.userId) {
      const user = await this.prisma.user.findUnique({ where: { userId } })
      if (user) changes.push(`Задача назначена пользователю: ${user.name}`)
    }

    if (departmentId && departmentId !== oldTask.departmentId) {
      if (!oldTask.dueDate) throw new Error('Не указан дедлайн для задачи')

      const employees = this.mapEmployees(
        await this.prisma.user.findMany({
          where: { departmentId },
          select: {
            userId: true,
            timezone: { select: { offset: true } },
            departmentId: true,
            tasks: {
              select: { hoursSpent: true, estimatedHours: true, status: true }
            }
          }
        })
      )

      await this.distributeTasks(
        [
          {
            id: taskId,
            deadline: oldTask.dueDate,
            priority: priority ?? oldTask.priority,
            estimated_hours: oldTask.estimatedHours ?? oldTask.hoursSpent ?? 0,
            started: ['progress', 'end'].includes(oldTask.status),
            department_id: departmentId
          }
        ],
        employees,
        createUser,
        oldTask
      )
    }

    const updatedTask = await this.prisma.task.update({
      where: { taskId },
      data: Prisma.validator<Prisma.TaskUpdateInput>()({
        ...taskData,
        hoursSpent: hoursSpent ?? oldTask.hoursSpent,
        status: status ?? oldTask.status,
        priority: priority ?? oldTask.priority,
        user: userId ? { connect: { userId } } : undefined,
        department: departmentId ? { connect: { departmentId } } : undefined,
        project: projectId ? { connect: { projectId } } : undefined,
        history: historyIds?.length
          ? { connect: historyIds.map(id => ({ historyId: id })) }
          : undefined
        // reports: reportIds?.length
        //   ? { connect: reportIds.map(id => ({ reportId: id })) }
        //   : undefined
      }),
      include: {
        user: true,
        history: true,
        //  reports: true,
        project: true
      }
    })

    await this.logTaskChanges(
      taskId,
      changes,
      userId || oldTask.userId,
      departmentId || oldTask.departmentId,
      createUser
    )

    if (hoursSpent !== undefined && hoursSpent !== oldTask.hoursSpent) {
      const comment = `Потрачено ${hoursSpent - oldTask.hoursSpent} ч. на выполнение задачи.`
      await this.historyService.create({
        taskId,
        userId: createUser.userId,
        departmentId: createUser.departmentId,
        comment,
        createdAt: new Date().toISOString(),
        createdByUserId: createUser.userId,
        createdByDepartmentId: createUser.departmentId,
        hoursSpent: hoursSpent - oldTask.hoursSpent
      })
    }

    return updatedTask
  }

  // Получение задачи по ID
  async getById(id: number) {
    const task = await this.prisma.task.findUnique({
      where: { taskId: id },
      include: {
        project: true,
        user: true,
        history: true
        // reports: true
      }
    })

    if (!task) throw new NotFoundException('Задача не найдена')

    return task
  }

  async remove(id: number) {
    await this.historyService.remove(id)
    // await this.reportTaskService.remove(id)

    return this.prisma.task.delete({
      where: { taskId: id }
    })
  }

  // Назначение задачи пользователю с добавлением в историю
  async assignTaskToUser(
    taskId: number,
    userId: number,
    createUser: { userId: number; departmentId: number }
  ) {
    const task = await this.getById(taskId)
    if (!task) throw new NotFoundException('Задача не найдена')

    const user = await this.userService.getById(userId)
    if (!user) throw new NotFoundException('Пользователь не найден')

    if (task.userId === userId) return task

    const updatedTask = await this.prisma.task.update({
      where: { taskId },
      data: { userId }
    })

    // Добавляем в историю
    await this.historyService.create({
      taskId,
      userId,
      comment: `Задача назначена пользователю: ${user.name}`,
      createdAt: new Date().toISOString(),
      createdByUserId: createUser.userId,
      createdByDepartmentId: createUser.departmentId
    })

    return updatedTask
  }

  // Получение всех отчётов по задаче
  // async getReportsByTaskId(taskId: number) {
  //   return this.reportTaskService.getReportsByTaskId(taskId)
  // }

  // Получение всей истории задачи
  async getHistoryByTaskId(taskId: number) {
    return this.historyService.getByTaskId(taskId)
  }

  async getTasksByProject(projectId: number) {
    const tasks = await this.prisma.task.findMany({
      where: { projectId },
      include: {
        user: true,
        history: true
        // reports: true
      }
    })

    return tasks
  }

  async updateTaskOrder(taskIds: number[]) {
    const updatePromises = taskIds.map((taskId, index) =>
      this.prisma.task.update({
        where: { taskId },
        data: { order: index }
      })
    )

    await Promise.all(updatePromises)
    return { message: 'Порядок задач обновлён' }
  }
}

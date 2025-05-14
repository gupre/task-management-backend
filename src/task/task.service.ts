import { Injectable, NotFoundException } from '@nestjs/common'
import { Cron, CronExpression } from '@nestjs/schedule'
import { Prisma, Status } from 'prisma/generated/client'
import { HistoryService } from 'src/history/history.service'
import { PrismaService } from 'src/prisma.service'
// import { ReportTaskService } from 'src/report-task/report-task.service'
import axios from 'axios'
import { eachWeekOfInterval, formatISO, startOfISOWeek } from 'date-fns'
import { NotificationService } from 'src/notification/notification.service'
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
    private userService: UserService,
    private notificationService: NotificationService
  ) {}

  // private pythonApiUrl = 'http://localhost:8000/assign-tasks/'

  private async distributeTasks(
    tasks,
    employees,
    createUser,
    oldTask?,
    fullTasks?
  ) {
    console.log(tasks)
    console.log(employees)

    const response = await axios.post(process.env.PYTHON_API_URL, {
      tasks,
      employees
    })
    console.log('Ответ от Python API:', response.data)

    for (const updatedTask of response.data.assigned_tasks) {
      if (updatedTask.assigned_to) {
        const fullTask = fullTasks?.find(t => t.id === updatedTask.id)

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
        if (user) {
          const dueDate = new Date(fullTask.dueDate)
          const formattedDate = dueDate.toLocaleDateString('ru-RU', {
            day: 'numeric',
            month: 'long',
            year: 'numeric'
          })

          await this.notificationService.notifyUser(
            user.userId,
            `${oldTask ? 'Перераспределена задача' : 'Назначена новая задача'}: ${fullTask.name}`,
            `Вам ${oldTask ? 'переназначена' : 'назначена'} задача "${fullTask.name}". Срок выполнения: ${formattedDate}`,
            'web'
          )
        }
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

  async getEmployeesWorkload(departmentId: number, newTaskDueDate: Date) {
    const employees = await this.prisma.user.findMany({
      where: {
        departmentId,
        isActive: true
      },
      include: {
        tasks: {
          where: {
            status: {
              in: ['planned', 'progress']
            }
          },
          select: {
            estimatedHours: true,
            assignmentDate: true,
            dueDate: true,
            hoursSpent: true,
            history: true
          }
        },
        timezone: true
      }
    })

    const now = startOfISOWeek(new Date())

    return employees.map(user => {
      const workingHours = (user.workingHours as {
        start: string
        end: string
      }) || { start: '08:00', end: '16:00' }
      const unavailableDates = user.unavailableDates || []

      const assigned_hours_by_week: Record<string, number> = {}

      for (const task of user.tasks) {
        const assignDate = new Date(task.assignmentDate)
        const dueDate = new Date(task.dueDate)

        const intervalWeeks = eachWeekOfInterval({
          start: assignDate,
          end: dueDate
        })
        const totalWeeks = intervalWeeks.length || 1

        // Потраченные часы в рамках каждой недели
        for (const historyRecord of task.history.filter(
          h => h.userId === user.userId
        )) {
          const weekStart = startOfISOWeek(new Date(historyRecord.createdAt))
          if (now === weekStart) {
            const weekKey = formatISO(weekStart, { representation: 'date' })
            assigned_hours_by_week[weekKey] =
              (assigned_hours_by_week[weekKey] || 0) +
              (historyRecord.hoursSpent ?? 0)
          }
        }

        // Распределим оставшиеся часы по неделям
        const remainingHours = Math.max(
          0,
          (task.estimatedHours ?? 0) - task.hoursSpent
        )

        for (const weekDate of intervalWeeks) {
          const weekKey = formatISO(startOfISOWeek(weekDate), {
            representation: 'date'
          })
          assigned_hours_by_week[weekKey] =
            (assigned_hours_by_week[weekKey] || 0) + remainingHours / totalWeeks
        }
      }

      return {
        id: user.userId,
        timezone_offset: user.timezone.offset,
        department_id: user.departmentId,
        unavailable_dates: unavailableDates,
        working_hours: workingHours,
        assigned_hours_by_week
      }
    })
  }
  async create(createTaskDto, createUser) {
    const {
      historyIds,
      reportIds,
      assignmentDate,
      dueDate,
      userId,
      ...taskData
    } = createTaskDto

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
        userId: userId ? userId : undefined,
        assignmentDate: assignmentDate ? new Date(assignmentDate) : new Date(),
        dueDate: dueDate ? new Date(dueDate) : undefined,
        order: lastTask ? lastTask.order + 1 : 0
      }
    })

    if (userId) {
      const user = await this.prisma.user.findUnique({
        where: { userId }
      })

      const dueDate = new Date(task.dueDate)
      const formattedDate = dueDate.toLocaleDateString('ru-RU', {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
      })

      await this.notificationService.notifyUser(
        userId,
        `${'Назначена новая задача'}: ${task.name}`,
        `Вам назначена задача "${user.name}". Срок выполнения: ${formattedDate}`,
        'web'
      )
    }

    await this.historyService.create({
      taskId: task.taskId,
      comment: `Задача создана ${task.name}`,
      createdByUserId: createUser.userId,
      createdByDepartmentId: createUser.departmentId,
      createdAt: new Date().toISOString()
    })

    if (!task.dueDate) throw new Error('Не указан дедлайн для задачи')

    if (!userId) {
      const employees = await this.getEmployeesWorkload(
        task.departmentId,
        task.dueDate
      )

      const taskForPython = {
        id: task.taskId,
        deadline: task.dueDate,
        priority: task.priority,
        estimated_hours: task.estimatedHours ?? task.hoursSpent ?? 0,
        started: ['progress', 'end'].includes(task.status),
        department_id: task.departmentId
      }

      const taskForNotify = {
        ...taskForPython,
        name: task.name,
        dueDate: task.dueDate
      }

      await this.distributeTasks(
        [taskForPython],
        employees,
        createUser,
        undefined,
        [taskForNotify]
      )
    }

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
      progress,
      dueDate,
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

    if (progress !== undefined && progress !== oldTask.progress) {
      changes.push(`Прогресс изменён: ${oldTask.progress ?? 0}% → ${progress}%`)
    }

    if (userId && userId !== oldTask.userId) {
      const user = await this.prisma.user.findUnique({ where: { userId } })
      if (user) changes.push(`Задача назначена пользователю: ${user.name}`)
    }

    if (departmentId && departmentId !== oldTask.departmentId) {
      if (!oldTask.dueDate) throw new Error('Не указан дедлайн для задачи')

      const employees = this.getEmployeesWorkload(
        departmentId,
        taskData.dueDate ? taskData.dueDate : oldTask.dueDate
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
          : undefined,
        progress: progress ?? oldTask.progress

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

    // Уведомления при изменении статуса (например, задача выполнена)
    if (status === Status.end && status !== oldTask.status) {
      const userToNotify = updatedTask.user
      if (userToNotify) {
        const message = `Задача выполнена: ${updatedTask.name}`
        const detail = `Задача "${updatedTask.name}" была выполнена. Поздравляем!`

        // Уведомляем исполнителя
        await this.notificationService.notifyUser(
          userToNotify.userId,
          message,
          detail,
          'web'
        )
      }

      // Уведомление для постановщика задачи (по истории)
      const history = await this.prisma.history.findFirst({
        where: { taskId, createdByUserId: { not: null } },
        orderBy: { createdAt: 'asc' }
      })

      if (history && history.createdByUserId) {
        const creator = await this.prisma.user.findUnique({
          where: { userId: history.createdByUserId }
        })

        if (creator) {
          const message = `Задача выполнена: ${updatedTask.name}`
          const detail = `Задача "${updatedTask.name}" была выполнена исполнителем.`

          // Уведомляем постановщика
          await this.notificationService.notifyUser(
            creator.userId,
            message,
            detail,
            'web'
          )
        }
      }
    }

    // Уведомление при изменении приоритета или срока выполнения
    if (priority && priority !== oldTask.priority) {
      const userToNotify = updatedTask.user
      if (userToNotify) {
        const message = `Обновление задачи: ${updatedTask.name}`
        const detail = `Приоритет изменён с "${priorityMap[oldTask.priority]}" на "${priorityMap[priority]}".`

        await this.notificationService.notifyUser(
          userToNotify.userId,
          message,
          detail,
          'web'
        )
      }
    }

    if (
      dueDate &&
      new Date(dueDate).toLocaleDateString() !==
        new Date(oldTask.dueDate).toLocaleDateString()
    ) {
      const userToNotify = updatedTask.user
      if (userToNotify) {
        const message = `Обновление задачи: ${updatedTask.name}`
        const detail = `Дедлайн изменён с ${new Date(oldTask.dueDate).toLocaleDateString()} на ${new Date(dueDate).toLocaleDateString()}.`

        await this.notificationService.notifyUser(
          userToNotify.userId,
          message,
          detail,
          'web'
        )
      }
    }

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
    const task = await this.prisma.task.findUnique({
      where: { taskId: id }
    })

    if (!task) {
      throw new Error('Задача не найдена')
    }

    const history = await this.prisma.history.findFirst({
      where: { taskId: id, createdByUserId: { not: null } },
      orderBy: { createdAt: 'asc' }
    })

    if (!history) {
      throw new Error('Не найдена история создания задачи')
    }

    await this.historyService.remove(id)
    // await this.reportTaskService.remove(id)

    await this.prisma.task.delete({
      where: { taskId: id }
    })

    // Отправляем уведомления исполнителю задачи
    if (task.userId) {
      const user = await this.prisma.user.findUnique({
        where: { userId: task.userId }
      })

      if (user) {
        await this.notificationService.notifyUser(
          user.userId,
          `Задача удалена: ${task.name}`,
          `Задача "${task.name}" была удалена. Это уведомление отправлено вам как исполнителю задачи.`,
          'web'
        )
      }
    }

    // Отправляем уведомление постановщику задачи (по истории)
    if (history.createdByUserId) {
      const creator = await this.prisma.user.findUnique({
        where: { userId: history.createdByUserId }
      })

      if (creator) {
        await this.notificationService.notifyUser(
          creator.userId,
          `Задача удалена: ${task.name}`,
          `Задача "${task.name}" была удалена. Это уведомление отправлено вам как постановщику задачи.`,
          'web'
        )
      }
    }

    return { message: 'Задача удалена и уведомления отправлены' }
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

    await this.notificationService.notifyUser(
      user.userId,
      `${'Назначена новая задача'}: ${updatedTask.name}`,
      `Вам назначена задача "${user.name}". Срок выполнения: ${updatedTask.dueDate}.`,
      'web'
    )

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

  @Cron(CronExpression.EVERY_DAY_AT_MIDNIGHT)
  async checkOverdueTasks() {
    const now = new Date()

    // Получаем все задачи, у которых deadline меньше текущего времени
    const overdueTasks = await this.prisma.task.findMany({
      where: {
        dueDate: {
          lt: now
        },
        status: { not: 'end' } // Фильтруем только не завершенные задачи
      }
    })

    for (const task of overdueTasks) {
      // Получаем пользователя, который отвечает за задачу
      const user = await this.prisma.user.findUnique({
        where: { userId: task.userId }
      })

      // Если пользователь найден, проверяем его часовой пояс
      if (user) {
        const userTimeZone = await this.prisma.timeZone.findUnique({
          where: { timezoneId: user.timezoneId }
        })

        const taskDueDate = task.dueDate

        // Преобразуем дату дедлайна в часовой пояс пользователя
        const taskDueDateInUserTimeZone = this.convertToTimeZone(
          taskDueDate,
          userTimeZone.name
        )

        // Если задача просрочена
        if (taskDueDateInUserTimeZone < now) {
          const subject = `Внимание! Задача "${task.name}" просрочена.`
          const message = `Задача должна была быть завершена до ${taskDueDateInUserTimeZone.toLocaleString()}.`

          // Уведомляем исполнителя
          await this.notificationService.notifyUser(
            user.userId,
            subject,
            message,
            'web'
          )
        }
      }
    }
  }

  // Метод для преобразования даты в часовой пояс пользователя
  convertToTimeZone(date: Date, timeZone: string): Date {
    return new Date(date.toLocaleString('ru-RU', { timeZone }))
  }
}

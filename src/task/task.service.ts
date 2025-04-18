import { Injectable, NotFoundException } from '@nestjs/common'
import axios from 'axios'
import { Prisma } from 'prisma/generated/client'
import { HistoryService } from 'src/history/history.service'
import { PrismaService } from 'src/prisma.service'
import { ReportTaskService } from 'src/report-task/report-task.service'
import { UserService } from 'src/user/user.service'
import { CreateTaskDto, UpdateTaskDto } from './task.dto'

@Injectable()
export class TaskService {
  constructor(
    private prisma: PrismaService,
    private historyService: HistoryService,
    private reportTaskService: ReportTaskService,
    private userService: UserService
  ) {}

  // private pythonApiUrl = 'http://localhost:8000/assign-tasks/'

  // Создание задачи с добавлением записи в историю и автоматическим распределением
  async create(createTaskDto: CreateTaskDto) {
    const { historyIds, reportIds, assignmentDate, dueDate, ...taskData } =
      createTaskDto

    const tasksInStatus = await this.prisma.task.findMany({
      where: {
        status: createTaskDto.status,
        projectId: createTaskDto.projectId
      },
      orderBy: { order: 'desc' },
      take: 1
    })

    const nextOrder = tasksInStatus.length > 0 ? tasksInStatus[0].order + 1 : 0

    const task = await this.prisma.task.create({
      data: {
        ...taskData,
        assignmentDate: createTaskDto.assignmentDate
          ? new Date(createTaskDto.assignmentDate)
          : new Date(),
        dueDate: createTaskDto.dueDate
          ? new Date(createTaskDto.dueDate)
          : undefined,
        order: nextOrder
      }
    })

    // Добавляем запись в историю о создании задачи
    await this.historyService.create({
      taskId: task.taskId,
      comment: `Задача создана ${task.name}`
    })

    // Получаем всех сотрудников для распределения задач
    const employeesWithAssignedHours = await this.prisma.user.findMany({
      select: {
        userId: true,
        timezone: {
          select: {
            offset: true
          }
        },
        departmentId: true,
        tasks: {
          select: {
            hoursSpent: true // Получение количество потраченных часов
          }
        }
      }
    })

    const employees = employeesWithAssignedHours.map(employee => ({
      id: employee.userId,
      timezone_offset: employee.timezone.offset,
      assigned_hours: employee.tasks.reduce(
        (sum, task) => sum + (task.hoursSpent || 0),
        0
      ),
      department_id: employee.departmentId
    }))

    // const pendingTasks = await this.prisma.task.findMany({
    //   where: {
    //     userId: null,
    //     status: { in: ['created', 'todo'] }
    //   }
    // });

    // Получаем все задачи для распределения
    const tasks = [
      {
        id: task.taskId,
        deadline: task.dueDate,
        priority: task.priority,
        estimated_hours: task.estimatedHours ?? task.hoursSpent ?? 0,
        started: task.status === 'progress' || task.status === 'end',
        department_id: task.departmentId
      }
    ] // В данном случае это только что созданная задача, можно добавить другие

    if (!task.dueDate) throw new Error('Не указан дедлайн для задачи')

    try {
      const response = await axios.post(process.env.PYTHON_API_URL, {
        employees,
        tasks
      })

      console.log('Ответ от Python API:', response.data)

      // После получения данных о распределении обновляем задачи
      const updatedTasks = response.data.assigned_tasks

      // Обновляем задачи в базе данных, назначая сотрудников
      for (const updatedTask of updatedTasks) {
        if (updatedTask.assigned_to) {
          await this.prisma.task.update({
            where: { taskId: updatedTask.id },
            data: { userId: updatedTask.assigned_to }
          })

          // Добавляем в историю, что задача была назначена пользователю
          const user = await this.prisma.user.findUnique({
            where: { userId: updatedTask.assigned_to }
          })
          await this.historyService.create({
            taskId: updatedTask.id,
            userId: updatedTask.assigned_to,
            departmentId: updatedTask.departmentId,
            comment: `Задача назначена пользователю: ${user?.name}`
          })
        }
      }
    } catch (e) {
      console.error('Ошибка при распределении задач:', e)
    }

    return task
  }

  // Получение задачи по ID
  async getById(id: number) {
    const task = await this.prisma.task.findUnique({
      where: { taskId: id },
      include: { project: true, user: true, history: true, reports: true }
    })

    if (!task) throw new NotFoundException('Задача не найдена')

    return task
  }

  async update(taskId: number, updateTaskDto: UpdateTaskDto) {
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
      ...taskData
    } = updateTaskDto

    const changes: string[] = []

    // Проверяем изменения и добавляем комментарии
    if (status && status !== oldTask.status) {
      changes.push(`Статус изменён: ${oldTask.status} → ${status}`)
    }
    if (priority && priority !== oldTask.priority) {
      changes.push(`Приоритет изменён: ${oldTask.priority} → ${priority}`)
    }
    if (userId && userId !== oldTask.userId) {
      const newUser = await this.prisma.user.findUnique({
        where: { userId: userId }
      })
      if (newUser) {
        changes.push(`Задача назначена пользователю: ${newUser.name}`)
      }
    }

    // Обновляем задачу с учетом всех изменений
    const updatedTask = await this.prisma.task.update({
      where: { taskId },
      data: Prisma.validator<Prisma.TaskUpdateInput>()({
        ...taskData,
        status: status ?? oldTask.status,
        priority: priority ?? oldTask.priority,
        user:
          userId !== undefined && userId !== null
            ? { connect: { userId } }
            : undefined,
        department:
          departmentId !== undefined && departmentId !== null
            ? { connect: { departmentId } }
            : undefined,
        project:
          updateTaskDto.projectId !== undefined &&
          updateTaskDto.projectId !== null
            ? { connect: { projectId: updateTaskDto.projectId } }
            : undefined,
        history: updateTaskDto.historyIds?.length
          ? {
              connect: updateTaskDto.historyIds.map(historyId => ({
                historyId
              }))
            }
          : undefined,
        reports: updateTaskDto.reportIds?.length
          ? {
              connect: updateTaskDto.reportIds.map(reportId => ({ reportId }))
            }
          : undefined
      }),
      include: {
        user: true,
        history: true,
        reports: true,
        project: true
      }
    })

    // Если есть изменения, добавляем их в историю
    if (changes.length > 0) {
      await this.historyService.create({
        taskId,
        userId: userId || oldTask.userId,
        departmentId: departmentId || oldTask.departmentId,
        comment: changes.join('; ')
      })
    }

    return updatedTask
  }

  async remove(id: number) {
    await this.historyService.remove(id)
    await this.reportTaskService.remove(id)

    return this.prisma.task.delete({
      where: { taskId: id }
    })
  }

  // Назначение задачи пользователю с добавлением в историю
  async assignTaskToUser(taskId: number, userId: number) {
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
      comment: `Задача назначена пользователю: ${user.name}`
    })

    return updatedTask
  }

  // Получение всех отчётов по задаче
  async getReportsByTaskId(taskId: number) {
    return this.reportTaskService.getReportsByTaskId(taskId)
  }

  // Получение всей истории задачи
  async getHistoryByTaskId(taskId: number) {
    return this.historyService.getByTaskId(taskId)
  }

  async getTasksByProject(projectId: number) {
    const tasks = await this.prisma.task.findMany({
      where: { projectId },
      include: {
        user: true,
        history: true,
        reports: true
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

  // async updateTaskOrder(body: {
  //   status: string
  //   tasks: { taskId: number; order: number }[]
  // }) {
  //   const updatePromises = body.tasks.map(task =>
  //     this.prisma.task.update({
  //       where: { taskId: task.taskId },
  //       data: {
  //         order: task.order
  //         // status: body.status,
  //       }
  //     })
  //   )

  //   await Promise.all(updatePromises)
  //   return { message: 'Порядок задач обновлён' }
  // }
}

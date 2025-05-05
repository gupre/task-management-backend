import { Injectable, NotFoundException } from '@nestjs/common'
import { Status } from 'prisma/generated/client'
import { PrismaService } from 'src/prisma.service'
import {
  CreateReportProjectDto,
  UpdateReportProjectDto
} from './report-project.dto'

@Injectable()
export class ReportProjectService {
  constructor(private prisma: PrismaService) {}

  async create(createReportProjectDto: CreateReportProjectDto) {
    const {
      projectId,
      title,
      type,
      generatedDate,
      content,
      performanceAnalysis
    } = createReportProjectDto

    const tasks = await this.prisma.task.findMany({
      where: { projectId }
    })

    const totalTasks = tasks.length
    const completedTasks = tasks.filter(t => t.status === Status.end).length
    const inProgressTasks = tasks.filter(
      t => t.status === Status.progress
    ).length
    const overdueTasks = tasks.filter(
      t =>
        t.dueDate && new Date(t.dueDate) < new Date() && t.status !== Status.end
    ).length

    let averageTimePerTask = 0
    let longestTaskDuration = 0
    let shortestTaskDuration = Number.MAX_SAFE_INTEGER

    if (completedTasks > 0) {
      const durations = tasks
        .filter(t => t.status === Status.end && t.assignmentDate && t.dueDate)
        .map(t => {
          const start = new Date(t.assignmentDate)
          const end = new Date(t.dueDate)
          return (end.getTime() - start.getTime()) / (1000 * 60 * 60) // в часах
        })

      if (durations.length > 0) {
        const totalDuration = durations.reduce((sum, d) => sum + d, 0)
        averageTimePerTask = totalDuration / durations.length
        longestTaskDuration = Math.max(...durations)
        shortestTaskDuration = Math.min(...durations)
      }
    }

    const completionRate =
      totalTasks > 0
        ? `${((completedTasks / totalTasks) * 100).toFixed(1)}%`
        : '0%'

    let generatedContent = content || ''
    let generatedPerformanceAnalysis = performanceAnalysis || ''

    if (!content || !performanceAnalysis) {
      switch (type) {
        case 'general':
          generatedContent = `
            Всего задач: ${totalTasks}.
            Выполнено задач: ${completedTasks}.
            В процессе: ${inProgressTasks}.
            Просрочено задач: ${overdueTasks}.
            Процент выполнения: ${completionRate}.
            Среднее время выполнения задачи: ${averageTimePerTask.toFixed(2)} ч.
            Самая быстрая задача: ${shortestTaskDuration === Number.MAX_SAFE_INTEGER ? 'нет данных' : shortestTaskDuration.toFixed(2) + ' ч'}.
            Самая долгая задача: ${longestTaskDuration.toFixed(2)} ч.
          `.trim()

          generatedPerformanceAnalysis = `
            Команда ${completionRate === '100.0%' ? 'отлично справляется с задачами' : 'имеет зоны для улучшения'}.
            Среднее время выполнения задачи составляет ${averageTimePerTask.toFixed(2)} часа.
            Количество просроченных задач: ${overdueTasks}.
          `.trim()
          break

        case 'tasks':
          generatedContent =
            tasks.length > 0
              ? tasks
                  .map(
                    task =>
                      `#${task.taskId}: ${task.name} — Статус: ${task.status}`
                  )
                  .join('\n')
              : 'Нет задач в этом проекте.'

          generatedPerformanceAnalysis = `Всего задач: ${totalTasks}, Завершено: ${completedTasks}. В работе: ${inProgressTasks}.`
          break

        case 'efficiency':
          generatedContent = `
            Процент выполнения задач: ${completionRate}.
            Среднее время выполнения одной задачи: ${averageTimePerTask.toFixed(2)} ч.
            Самая долгая задача: ${longestTaskDuration.toFixed(2)} ч.
            Самая быстрая задача: ${shortestTaskDuration === Number.MAX_SAFE_INTEGER ? 'нет данных' : shortestTaskDuration.toFixed(2) + ' ч'}.
          `.trim()

          generatedPerformanceAnalysis = `
            Эффективность команды: ${completionRate}.
            Рекомендуется обратить внимание на задачи с длительным сроком выполнения.
            Количество просроченных задач: ${overdueTasks}.
            Средняя скорость выполнения задач: ${averageTimePerTask.toFixed(2)} ч/задача.
          `.trim()
          break

        case 'workload': {
          const workload = await this.getWorkloadReport(projectId)
          generatedContent = workload
            .map(
              w =>
                `Неделя: ${w.week}, Задач: ${w.totalTasks}, План: ${w.totalHoursPlanned} ч, Факт: ${w.totalHoursSpent} ч, Переработка: ${w.overtime} ч, Простой: ${w.idleTime} ч`
            )
            .join('\n')

          const totalOvertime = workload.reduce((sum, w) => sum + w.overtime, 0)
          const totalIdle = workload.reduce((sum, w) => sum + w.idleTime, 0)

          generatedPerformanceAnalysis = `
      Общий объём переработки: ${totalOvertime} ч.
      Общий простой: ${totalIdle} ч.
      Рекомендуется пересмотреть распределение задач по неделям.`
          break
        }

        case 'team-member': {
          const team = await this.getTeamMemberReport(projectId)
          generatedContent = team
            .map(
              t =>
                `Сотрудник: ${t.userName}, Задач: ${t.taskCount}, Завершено: ${t.completed}, Эффективность: ${t.completionRate}%, Переработка: ${t.overtime} ч`
            )
            .join('\n')

          const lowEfficiency = team.filter(t => t.completionRate < 70)
          const highOvertime = team.filter(t => t.overtime > 5)

          generatedPerformanceAnalysis = `
      Сотрудники с низкой эффективностью: ${
        lowEfficiency.map(t => t.userName).join(', ') || 'нет'
      }.
      Сотрудники с переработкой: ${
        highOvertime.map(t => t.userName).join(', ') || 'нет'
      }.
      Рекомендуется сбалансировать нагрузку.`
          break
        }

        default:
          generatedContent = 'Данные недоступны для выбранного типа отчёта.'
          generatedPerformanceAnalysis = ''
      }
    }

    return {
      ...(await this.prisma.reportProject.create({
        data: {
          projectId,
          title,
          type,
          generatedDate: generatedDate || undefined,
          content: generatedContent,
          performanceAnalysis: generatedPerformanceAnalysis,
          completedTasks,
          averageTimePerTask,
          completionRate,
          teamEfficiency: completionRate,
          totalTasks
        }
      }))
      // tasks: tasks.map(task => ({
      //   id: String(task.taskId),
      //   name: task.name,
      //   start: new Date(task.assignmentDate),
      //   end: new Date(task.dueDate),
      //   progress:
      //     task.status === 'end' ? 100 : task.status === 'progress' ? 50 : 0,
      //   type: 'task'
      // }))
    }
  }

  // Получить все отчеты проектов
  async findAll() {
    return this.prisma.reportProject.findMany({
      include: {
        project: true
        // reports: true
      }
    })
  }

  // Получить отчет проекта по ID
  async getById(reportId: number) {
    const report = await this.prisma.reportProject.findUnique({
      where: { reportId },
      include: {
        project: true
        // reports: true
      }
    })

    if (!report) {
      throw new NotFoundException(`Отчет проекта с ID ${reportId} не найден`)
    }

    return report
  }

  // Получить отчет проекта по ID
  async getReportsByProjectId(
    projectId: number,
    startDate?: string,
    endDate?: string
  ) {
    const whereConditions: any = { projectId }

    if (startDate) {
      whereConditions.generatedDate = {
        gte: new Date(startDate)
      }
    }

    if (endDate) {
      whereConditions.generatedDate = {
        ...whereConditions.generatedDate,
        lte: new Date(endDate)
      }
    }

    return await this.prisma.reportProject.findMany({
      where: whereConditions,
      include: {
        project: true
        // reports: true
      },
      orderBy: {
        generatedDate: 'desc'
      }
    })
  }

  async getTasksForGantt(projectId: number) {
    const tasks = await this.prisma.task.findMany({
      where: { projectId: Number(projectId) }
    })

    console.log('Fetched tasks for Gantt:', tasks)

    return tasks.map(task => ({
      id: String(task.taskId),
      name: task.name,
      start: task.assignmentDate,
      end: task.dueDate,
      progress:
        task.status === 'end' ? 100 : task.status === 'progress' ? 50 : 0,
      type: 'task'
    }))
  }
  async getTeamMemberReport(projectId: number) {
    const tasks = await this.prisma.task.findMany({
      where: { projectId },
      select: {
        taskId: true,
        name: true,
        userId: true,
        estimatedHours: true,
        hoursSpent: true,
        assignmentDate: true,
        dueDate: true,
        status: true,
        user: {
          select: {
            userId: true,
            name: true
          }
        }
      }
    })

    const reportMap = new Map<
      number,
      {
        userId: number
        userName: string
        taskCount: number
        completed: number
        totalDays: number
        estimatedHours: number
        actualHours: number
      }
    >()

    for (const task of tasks) {
      if (!task.userId || !task.user) continue

      const { userId, name: userName } = task.user

      const report = reportMap.get(userId) || {
        userId,
        userName,
        taskCount: 0,
        completed: 0,
        totalDays: 0,
        estimatedHours: 0,
        actualHours: 0
      }

      report.taskCount += 1
      report.estimatedHours += task.estimatedHours ?? 0
      report.actualHours += task.hoursSpent ?? 0

      if (task.status === 'end') {
        report.completed += 1

        const start = task.assignmentDate ?? new Date()
        const end = task.dueDate ?? new Date()
        const days = (end.getTime() - start.getTime()) / (1000 * 3600 * 24)
        report.totalDays += days
      }

      reportMap.set(userId, report)
    }

    return Array.from(reportMap.values()).map(r => ({
      ...r,
      completionRate:
        r.completed > 0 ? Math.round((r.completed / r.taskCount) * 100) : 0,
      avgSpeedDays: r.completed > 0 ? r.totalDays / r.completed : null,
      overtime: Math.max(0, r.actualHours - r.estimatedHours)
    }))
  }

  async getWorkloadReport(
    projectId: number,
    startDate?: string,
    endDate?: string
  ) {
    const tasks = await this.prisma.task.findMany({
      where: {
        projectId,
        assignmentDate: {
          gte: startDate ? new Date(startDate) : undefined,
          lte: endDate ? new Date(endDate) : undefined
        }
      },
      select: {
        taskId: true,
        estimatedHours: true,
        hoursSpent: true,
        assignmentDate: true
      }
    })

    const groupedByWeek = new Map<
      string,
      {
        totalTasks: number
        totalHoursPlanned: number
        totalHoursSpent: number
      }
    >()

    for (const task of tasks) {
      const date = new Date(task.assignmentDate ?? new Date())
      const week = `${date.getFullYear()}-${this.getWeekNumber(date)}`

      const current = groupedByWeek.get(week) || {
        totalTasks: 0,
        totalHoursPlanned: 0,
        totalHoursSpent: 0
      }

      current.totalTasks += 1
      current.totalHoursPlanned += task.estimatedHours ?? 0
      current.totalHoursSpent += task.hoursSpent ?? 0

      groupedByWeek.set(week, current)
    }

    return Array.from(groupedByWeek.entries()).map(([week, data]) => ({
      week,
      ...data,
      overtime: Math.max(0, data.totalHoursSpent - data.totalHoursPlanned),
      idleTime: Math.max(0, data.totalHoursPlanned - data.totalHoursSpent)
    }))
  }

  private getWeekNumber(date: Date): string {
    const tempDate = new Date(
      Date.UTC(date.getFullYear(), date.getMonth(), date.getDate())
    )
    const dayNum = tempDate.getUTCDay() || 7
    tempDate.setUTCDate(tempDate.getUTCDate() + 4 - dayNum)
    const yearStart = new Date(Date.UTC(tempDate.getUTCFullYear(), 0, 1))
    const weekNo = Math.ceil(((+tempDate - +yearStart) / 86400000 + 1) / 7)
    return weekNo.toString().padStart(2, '0')
  }

  async update(
    reportId: number,
    updateReportProjectDto: UpdateReportProjectDto
  ) {
    return this.prisma.reportProject.update({
      where: { reportId },
      data: {
        projectId: updateReportProjectDto.projectId,
        generatedDate: updateReportProjectDto.generatedDate,
        content: updateReportProjectDto.content,
        performanceAnalysis: updateReportProjectDto.performanceAnalysis,
        completedTasks: updateReportProjectDto.completedTasks,
        averageTimePerTask: updateReportProjectDto.averageTimePerTask,
        completionRate: updateReportProjectDto.completionRate,
        teamEfficiency: updateReportProjectDto.teamEfficiency,
        totalTasks: updateReportProjectDto.totalTasks
        // reports: {
        //   connect: updateReportProjectDto.addReports?.map(id => ({
        //     reportId: id
        //   })),
        //   disconnect: updateReportProjectDto.removeReports?.map(id => ({
        //     reportId: id
        //   }))
        // }
      }
    })
  }

  async remove(reportId: number) {
    return this.prisma.reportProject.delete({
      where: { reportId }
    })
  }
}

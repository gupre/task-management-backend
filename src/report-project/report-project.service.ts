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
  Командная эффективность на уровне ${completionRate}.
  Рекомендуется обратить внимание на задачи с длительным сроком выполнения.
  Количество просроченных задач: ${overdueTasks}.
          `.trim()
          break

        default:
          generatedContent = 'Данные недоступны для выбранного типа отчёта.'
          generatedPerformanceAnalysis = ''
      }
    }

    return this.prisma.reportProject.create({
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
        totalTasks,
        reports: createReportProjectDto.reports?.length
          ? {
              connect: createReportProjectDto.reports.map(reportId => ({
                reportId
              }))
            }
          : undefined
      }
    })
  }

  // Получить все отчеты проектов
  async findAll() {
    return this.prisma.reportProject.findMany({
      include: {
        project: true,
        reports: true
      }
    })
  }

  // Получить отчет проекта по ID
  async getById(reportId: number) {
    const report = await this.prisma.reportProject.findUnique({
      where: { reportId },
      include: {
        project: true,
        reports: true
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
        project: true,
        reports: true
      }
    })
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
        totalTasks: updateReportProjectDto.totalTasks,
        reports: {
          connect: updateReportProjectDto.addReports?.map(id => ({
            reportId: id
          })),
          disconnect: updateReportProjectDto.removeReports?.map(id => ({
            reportId: id
          }))
        }
      }
    })
  }

  async remove(reportId: number) {
    return this.prisma.reportProject.delete({
      where: { reportId }
    })
  }
}

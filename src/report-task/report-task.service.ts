import { Injectable, NotFoundException } from '@nestjs/common'
import { PrismaService } from 'src/prisma.service'
import { ReportTaskDto } from './report-task.dto'

@Injectable()
export class ReportTaskService {
  constructor(private prisma: PrismaService) {}

  async create(createReportTaskDto: ReportTaskDto) {
    return this.prisma.reportTask.create({
      data: {
        taskId: createReportTaskDto.taskId,
        reportProjectId: createReportTaskDto.reportProjectId,
        generatedDate: createReportTaskDto.generatedDate || undefined,
        content: createReportTaskDto.content,
        performanceAnalysis: createReportTaskDto.performanceAnalysis
      }
    })
  }

  // Получить все отчеты задач
  async findAll() {
    return this.prisma.reportTask.findMany({
      include: {
        task: true,
        reportProject: true
      }
    })
  }

  // Получить отчет задачи по ID
  async getById(reportId: number) {
    const report = await this.prisma.reportTask.findUnique({
      where: { reportId },
      include: {
        task: true,
        reportProject: true
      }
    })

    if (!report) {
      throw new NotFoundException(`Отчет задачи с ID ${reportId} не найден`)
    }

    return report
  }

  // Получить отчеты задач по ID задачи
  async getReportsByTaskId(taskId: number) {
    const reports = await this.prisma.reportTask.findMany({
      where: { taskId },
      include: {
        task: true,
        reportProject: true
      }
    })

    if (!reports || reports.length === 0) {
      throw new NotFoundException(`Отчеты задачи с ID ${taskId} не найдены`)
    }

    return reports
  }

  async update(id: number, updateReportTaskDto: ReportTaskDto) {
    return this.prisma.reportTask.update({
      where: { reportId: id },
      data: updateReportTaskDto
    })
  }

  async remove(id: number) {
    return this.prisma.reportTask.delete({
      where: { reportId: id }
    })
  }
}

import { Injectable, NotFoundException } from '@nestjs/common'
import { PrismaService } from 'src/prisma.service'
import {
  CreateReportProjectDto,
  UpdateReportProjectDto
} from './report-project.dto'

@Injectable()
export class ReportProjectService {
  constructor(private prisma: PrismaService) {}

  async create(createReportProjectDto: CreateReportProjectDto) {
    return this.prisma.reportProject.create({
      data: {
        projectId: createReportProjectDto.projectId,
        generatedDate: createReportProjectDto.generatedDate || undefined,
        content: createReportProjectDto.content,
        performanceAnalysis: createReportProjectDto.performanceAnalysis,
        completedTasks: createReportProjectDto.completedTasks,
        averageTimePerTask: createReportProjectDto.averageTimePerTask,
        completionRate: createReportProjectDto.completionRate,
        teamEfficiency: createReportProjectDto.teamEfficiency,
        totalTasks: createReportProjectDto.totalTasks,
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
  async getReportsByProjectId(projectId: number) {
    const report = await this.prisma.reportProject.findMany({
      where: { projectId },
      include: {
        project: true,
        reports: true
      }
    })

    if (!report) {
      throw new NotFoundException(`Отчеты проекта с ID ${projectId} не найден`)
    }

    return report
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

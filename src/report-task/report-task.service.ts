// import { Injectable, NotFoundException } from '@nestjs/common'
// import { Status } from 'prisma/generated/client'
// import { PrismaService } from 'src/prisma.service'
// import { ReportTaskDto } from './report-task.dto'

// @Injectable()
// export class ReportTaskService {
//   constructor(private prisma: PrismaService) {}

//   async create(createReportTaskDto: ReportTaskDto) {
//     // Получаем задачу
//     const task = await this.prisma.task.findUnique({
//       where: { taskId: createReportTaskDto.taskId }
//     })

//     if (!task) {
//       throw new NotFoundException(
//         `Задача с ID ${createReportTaskDto.taskId} не найдена`
//       )
//     }

//     // Расчёт длительности
//     let durationHours = 0
//     if (task.assignmentDate && task.dueDate) {
//       const start = new Date(task.assignmentDate)
//       const end = new Date(task.dueDate)
//       durationHours = (end.getTime() - start.getTime()) / (1000 * 60 * 60)
//     }

//     // Используем потраченное время
//     const hoursSpent = task.hoursSpent ?? 0
//     const estimated = task.estimatedHours ?? 0

//     // Эффективность выполнения
//     let performanceAnalysis = ''
//     if (task.status === Status.end) {
//       if (hoursSpent && estimated) {
//         const efficiency = estimated / hoursSpent
//         performanceAnalysis = `Эффективность выполнения задачи: ${(efficiency * 100).toFixed(1)}%. `
//         performanceAnalysis +=
//           efficiency >= 1
//             ? 'Задача выполнена в срок или быстрее.'
//             : 'Задача заняла больше времени, чем планировалось.'
//       } else {
//         performanceAnalysis = 'Недостаточно данных для оценки эффективности.'
//       }
//     } else {
//       performanceAnalysis = 'Задача еще не завершена.'
//     }

//     return this.prisma.reportTask.create({
//       data: {
//         taskId: createReportTaskDto.taskId,
//         title: createReportTaskDto.title,
//         type: createReportTaskDto.type,
//         reportProjectId: createReportTaskDto.reportProjectId,
//         generatedDate: createReportTaskDto.generatedDate || undefined,
//         content: createReportTaskDto.content,
//         performanceAnalysis
//       }
//     })
//   }

//   // Получить все отчеты задач
//   async findAll() {
//     return this.prisma.reportTask.findMany({
//       include: {
//         task: true,
//         reportProject: true
//       }
//     })
//   }

//   // Получить отчет задачи по ID
//   async getById(reportId: number) {
//     const report = await this.prisma.reportTask.findUnique({
//       where: { reportId },
//       include: {
//         task: true,
//         reportProject: true
//       }
//     })

//     if (!report) {
//       throw new NotFoundException(`Отчет задачи с ID ${reportId} не найден`)
//     }

//     return report
//   }

//   // Получить отчеты задач по ID задачи
//   async getReportsByTaskId(taskId: number) {
//     const reports = await this.prisma.reportTask.findMany({
//       where: { taskId },
//       include: {
//         task: true,
//         reportProject: true
//       }
//     })

//     if (!reports || reports.length === 0) {
//       throw new NotFoundException(`Отчеты задачи с ID ${taskId} не найдены`)
//     }

//     return reports
//   }

//   async update(id: number, updateReportTaskDto: ReportTaskDto) {
//     return this.prisma.reportTask.update({
//       where: { reportId: id },
//       data: updateReportTaskDto
//     })
//   }

//   async remove(reportId: number) {
//     return this.prisma.reportTask.deleteMany({
//       where: { reportId }
//     })
//   }
// }

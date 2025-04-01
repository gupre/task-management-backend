import { Module } from '@nestjs/common'
import { PrismaService } from 'src/prisma.service'
import { ReportTaskController } from './report-task.controller'
import { ReportTaskService } from './report-task.service'

@Module({
  controllers: [ReportTaskController],
  providers: [ReportTaskService, PrismaService],
  exports: [ReportTaskService]
})
export class ReportTaskModule {}

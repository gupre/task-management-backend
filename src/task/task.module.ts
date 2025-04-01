import { Module } from '@nestjs/common'
import { HistoryService } from 'src/history/history.service'
import { PrismaService } from 'src/prisma.service'
import { ReportTaskService } from 'src/report-task/report-task.service'
import { UserModule } from 'src/user/user.module'
import { UserService } from 'src/user/user.service'
import { TaskController } from './task.controller'
import { TaskService } from './task.service'

@Module({
  imports: [UserModule],
  controllers: [TaskController],
  providers: [
    TaskService,
    PrismaService,
    HistoryService,
    UserService,
    ReportTaskService
  ],
  exports: [TaskService]
})
export class TaskModule {}

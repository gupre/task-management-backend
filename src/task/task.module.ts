import { forwardRef, Module } from '@nestjs/common'
import { HistoryService } from 'src/history/history.service'
import { PrismaService } from 'src/prisma.service'
// import { ReportTaskService } from 'src/report-task/report-task.service'
import { NotificationModule } from 'src/notification/notification.module'
import { UserModule } from 'src/user/user.module'
import { TaskController } from './task.controller'
import { TaskService } from './task.service'

@Module({
  imports: [forwardRef(() => UserModule), NotificationModule],
  controllers: [TaskController],
  providers: [
    TaskService,
    PrismaService,
    HistoryService
    // UserService,
    // ReportTaskService,
    // NotificationService,
  ],
  exports: [TaskService]
})
export class TaskModule {}

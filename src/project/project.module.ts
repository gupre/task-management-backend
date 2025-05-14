import { forwardRef, Module } from '@nestjs/common'
import { HistoryService } from 'src/history/history.service'
import { PrismaService } from 'src/prisma.service'
import { ReportProjectService } from 'src/report-project/report-project.service'
// import { ReportTaskService } from 'src/report-task/report-task.service'
import { NotificationModule } from 'src/notification/notification.module'
import { ProjectUserModule } from 'src/project-user/project-user.module'
import { TaskModule } from 'src/task/task.module'
import { TaskService } from 'src/task/task.service'
import { UserModule } from 'src/user/user.module'
import { ProjectController } from './project.controller'
import { ProjectService } from './project.service'

@Module({
  imports: [
    forwardRef(() => ProjectUserModule),
    NotificationModule,
    TaskModule,
    UserModule
  ],
  providers: [
    ProjectService,
    PrismaService,
    TaskService,
    ReportProjectService,
    HistoryService
  ],
  controllers: [ProjectController],
  exports: [ProjectService]
})
export class ProjectModule {}

import { Module } from '@nestjs/common'
import { HistoryService } from 'src/history/history.service'
import { PrismaService } from 'src/prisma.service'
import { ProjectUserService } from 'src/project-user/project-user.service'
import { ReportProjectService } from 'src/report-project/report-project.service'
// import { ReportTaskService } from 'src/report-task/report-task.service'
import { TaskModule } from 'src/task/task.module'
import { TaskService } from 'src/task/task.service'
import { UserModule } from 'src/user/user.module'
import { ProjectController } from './project.controller'
import { ProjectService } from './project.service'

@Module({
  imports: [TaskModule, UserModule],
  providers: [
    ProjectService,
    PrismaService,
    ProjectUserService,
    TaskService,
    ReportProjectService,
    HistoryService
    // ReportTaskService
  ],
  controllers: [ProjectController],
  exports: [ProjectService]
})
export class ProjectModule {}

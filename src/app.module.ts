import { Module } from '@nestjs/common'
import { AuthModule } from './auth/auth.module'
import { departmentModule } from './department/department.module'
import { HistoryModule } from './history/history.module'
import { PermissionsModule } from './permissions/permissions.module'
import { PrismaService } from './prisma.service'
import { ProjectUserModule } from './project-user/project-user.module'
import { ProjectModule } from './project/project.module'
import { ReportProjectModule } from './report-project/report-project.module'
// import { ReportTaskModule } from './report-task/report-task.module'
import { RolePermissionsModule } from './role-permissions/role-permissions.module'
import { RoleModule } from './role/role.module'
import { TaskModule } from './task/task.module'
import { TimeZoneModule } from './time-zone/time-zone.module'
import { UserModule } from './user/user.module'

import { APP_GUARD } from '@nestjs/core'
import { RolesGuard } from './role/guards/roles.guard'

@Module({
  imports: [
    ProjectModule,
    AuthModule,
    UserModule,
    ProjectUserModule,
    TaskModule,
    // ReportTaskModule,
    ReportProjectModule,
    HistoryModule,
    departmentModule,
    RoleModule,
    RolePermissionsModule,
    PermissionsModule,
    TimeZoneModule
  ],
  providers: [
    PrismaService,
    {
      provide: APP_GUARD,
      useClass: RolesGuard
    }
  ],
  exports: [PrismaService]
})
export class AppModule {}

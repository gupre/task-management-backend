import { Module } from '@nestjs/common'
import { NotificationModule } from 'src/notification/notification.module'
import { NotificationService } from 'src/notification/notification.service'
import { PrismaService } from 'src/prisma.service'
import { ProjectUserController } from './project-user.controller'
import { ProjectUserService } from './project-user.service'

@Module({
  imports: [NotificationModule],
  controllers: [ProjectUserController],
  providers: [ProjectUserService, PrismaService, NotificationService],
  exports: [ProjectUserService]
})
export class ProjectUserModule {}

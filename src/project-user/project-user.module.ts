import { Module } from '@nestjs/common'
import { PrismaService } from 'src/prisma.service'
import { ProjectUserController } from './project-user.controller'
import { ProjectUserService } from './project-user.service'

@Module({
  controllers: [ProjectUserController],
  providers: [ProjectUserService, PrismaService],
  exports: [ProjectUserService]
})
export class ProjectUserModule {}

import { Module } from '@nestjs/common'
import { PrismaService } from 'src/prisma.service'
import { RolePermissionsController } from './role-permissions.controller'
import { RolePermissionsService } from './role-permissions.service'

@Module({
  controllers: [RolePermissionsController],
  providers: [RolePermissionsService, PrismaService],
  exports: [RolePermissionsService]
})
export class RolePermissionsModule {}

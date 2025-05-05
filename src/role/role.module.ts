import { Module } from '@nestjs/common'
import { PrismaService } from 'src/prisma.service'
// import { RolePermissionsService } from 'src/role-permissions/role-permissions.service'
import { RoleController } from './role.controller'
import { RoleService } from './role.service'

@Module({
  controllers: [RoleController],
  providers: [RoleService, PrismaService],
  exports: [RoleService]
})
export class RoleModule {}

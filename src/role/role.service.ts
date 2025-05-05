import { Injectable } from '@nestjs/common'
import { PrismaService } from 'src/prisma.service'
// import { RolePermissionsService } from 'src/role-permissions/role-permissions.service'
import { CreateRoleDto, UpdateRoleDto } from './role.dto'

@Injectable()
export class RoleService {
  constructor(
    private readonly prisma: PrismaService
    // private readonly rolePermissionsService: RolePermissionsService
  ) {}

  async create(createRoleDto: CreateRoleDto) {
    const { name, usersIds, permissionsIds } = createRoleDto

    // Создание роли
    const role = await this.prisma.role.create({
      data: {
        name,
        users: {
          connect: usersIds?.map(userId => ({ userId })) || []
        }
      }
    })

    // // Если разрешения переданы, добавляем их через сервис RolePermissions
    // if (permissionsIds?.length) {
    //   await this.rolePermissionsService.addPermissionsToRole(
    //     role.roleId,
    //     permissionsIds.map(p => ({
    //       roleId: role.roleId,
    //       permissionsId: p
    //     }))
    //   )
    // }

    return role
  }

  async findAll() {
    return await this.prisma.role.findMany({
      include: {
        users: true
        // permissions: true
      }
    })
  }

  async getById(roleId: number) {
    return await this.prisma.role.findUnique({
      where: { roleId },
      include: {
        users: true
        // permissions: true
      }
    })
  }

  async update(roleId: number, updateRoleDto: UpdateRoleDto) {
    const { name, usersIds, permissionsIds } = updateRoleDto

    // Обновление роли
    const role = await this.prisma.role.update({
      where: { roleId },
      data: {
        name,
        users: {
          set: usersIds?.map(userId => ({ userId })) || []
        }
      }
    })

    // // Если разрешения переданы, обновляем их через сервис RolePermissions
    // if (permissionsIds?.length) {
    //   await this.rolePermissionsService.remove(
    //     roleId,
    //     permissionsIds.map(p => ({
    //       roleId: role.roleId,
    //       permissionsId: p
    //     }))
    //   ) // Удаляем старые разрешения
    //   await this.rolePermissionsService.addPermissionsToRole(
    //     roleId,
    //     permissionsIds.map(p => ({
    //       roleId: role.roleId,
    //       permissionsId: p
    //     }))
    //   ) // Добавляем новые разрешения
    // }

    return role
  }

  async remove(roleId: number) {
    return await this.prisma.role.delete({
      where: { roleId }
    })
  }
}

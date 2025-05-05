// import { Injectable } from '@nestjs/common'
// import { PrismaService } from 'src/prisma.service'
// import { CreateRolePermissionsDto } from './role-permissions.dto'

// @Injectable()
// export class RolePermissionsService {
//   constructor(private readonly prisma: PrismaService) {}

//   // // Метод для добавления разрешений к роли
//   // async addPermissionsToRole(
//   //   roleId: number,
//   //   permissions: CreateRolePermissionsDto[]
//   // ) {
//   //   const connectPermissions = permissions.map(permission => ({
//   //     roleId,
//   //     permissionsId: permission.permissionsId
//   //   }))

//   //   return await this.prisma.rolePermissions.createMany({
//   //     data: connectPermissions
//   //   })
//   // }

//   async getPermissionsForRole(roleId: number) {
//     return await this.prisma.permissions.findMany({
//       where: {
//         roles: { some: { roleId } }
//       }
//     })
//   }

//   // Метод для удаления разрешений с роли
//   async remove(roleId: number, permissions: CreateRolePermissionsDto[]) {
//     return await this.prisma.rolePermissions.deleteMany({
//       where: {
//         roleId,
//         permissionsId: { in: permissions.map(p => p.permissionsId) }
//       }
//     })
//   }
// }

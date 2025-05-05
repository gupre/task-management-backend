// import { Injectable } from '@nestjs/common'
// import { PrismaService } from 'src/prisma.service'
// import { RolePermissionsService } from 'src/role-permissions/role-permissions.service'
// import { CreatePermissionsDto, UpdatePermissionsDto } from './permissions.dto'

// @Injectable()
// export class PermissionsService {
//   constructor(
//     private prisma: PrismaService,
//     private readonly rolePermissionsService: RolePermissionsService
//   ) {}

//   // Создание разрешения
//   async create(data: CreatePermissionsDto) {
//     return this.prisma.permissions.create({
//       data: {
//         name: data.name
//       },
//       include: { roles: true }
//     })
//   }

//   // Получение всех разрешений
//   async getAll() {
//     return this.prisma.permissions.findMany({
//       include: { roles: true }
//     })
//   }

//   // Получение разрешения по ID
//   async getById(permissionsId: number) {
//     return this.prisma.permissions.findUnique({
//       where: { permissionsId },
//       include: { roles: true }
//     })
//   }

//   // Обновление разрешения
//   async update(permissionsId: number, data: UpdatePermissionsDto) {
//     return this.prisma.permissions.update({
//       where: { permissionsId },
//       data: {
//         name: data.name
//       },
//       include: { roles: true }
//     })
//   }

//   // Добавление роли к разрешению
//   async addRoleToPermission(permissionsId: number, roleId: number) {
//     return this.prisma.permissions.update({
//       where: { permissionsId },
//       data: {
//         roles: {
//           connect: { roleId_permissionsId: { roleId, permissionsId } }
//         }
//       },
//       include: { roles: true }
//     })
//   }

//   // Удаление роли у разрешения
//   async removeRoleFromPermission(permissionsId: number, roleId: number) {
//     return this.prisma.permissions.update({
//       where: { permissionsId },
//       data: {
//         roles: {
//           disconnect: { roleId_permissionsId: { roleId, permissionsId } }
//         }
//       },
//       include: { roles: true }
//     })
//   }

//   // Замена всех ролей у разрешения
//   async setRolesForPermission(permissionsId: number, roleIds: number[]) {
//     return this.prisma.permissions.update({
//       where: { permissionsId },
//       data: {
//         roles: {
//           set: roleIds.map(roleId => ({
//             roleId_permissionsId: { roleId, permissionsId }
//           }))
//         }
//       },
//       include: { roles: true }
//     })
//   }

//   // Удаление разрешения
//   async remove(permissionsId: number, roleId: number) {
//     await this.rolePermissionsService.remove(roleId, [
//       { roleId, permissionsId }
//     ])

//     return await this.prisma.permissions.delete({
//       where: { permissionsId }
//     })
//   }
// }

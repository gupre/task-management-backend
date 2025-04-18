import { Injectable } from '@nestjs/common'
import { PrismaService } from 'src/prisma.service'
import { CreateDepartmentDto, UpdateDepartmentDto } from './department.dto'

@Injectable()
export class departmentService {
  constructor(private prisma: PrismaService) {}

  // Создать департамент
  async create(createDepartmentDto: CreateDepartmentDto) {
    return this.prisma.department.create({
      data: {
        name: createDepartmentDto.name,
        users: createDepartmentDto.users?.length
          ? { connect: createDepartmentDto.users.map(userId => ({ userId })) }
          : undefined
      }
    })
  }

  // Получить все департаменты
  async getAll() {
    return this.prisma.department.findMany({
      include: {
        users: true
        // history: true
      },
      orderBy: {
        name: 'asc'
      }
    })
  }

  // Получить департамент по ID
  async getById(departmentId: number) {
    return this.prisma.department.findUnique({
      where: { departmentId },
      include: {
        users: true
        // history: true
      }
    })
  }

  // Добавление пользователя в департамент
  async addUserToDepartment(departmentId: number, userId: number) {
    return this.prisma.department.update({
      where: { departmentId },
      data: {
        users: {
          connect: { userId }
        }
      }
    })
  }

  // Удаление пользователя из департамента
  async removeUserFromDepartment(departmentId: number, userId: number) {
    return this.prisma.department.update({
      where: { departmentId },
      data: {
        users: {
          disconnect: { userId }
        }
      }
    })
  }

  // Получить всех пользователей департамента
  async getUsersById(departmentId: number) {
    return this.prisma.department.findUnique({
      where: { departmentId },
      include: { users: true }
    })
  }

  // Замена всех пользователей в департаменте
  async setUsersForDepartment(departmentId: number, userIds: number[]) {
    return this.prisma.department.update({
      where: { departmentId },
      data: {
        users: {
          set: userIds.map(userId => ({ userId }))
        }
      }
    })
  }

  // Обновить департамент
  async update(departmentId: number, updateDepartmentDto: UpdateDepartmentDto) {
    return this.prisma.department.update({
      where: { departmentId },
      data: {
        name: updateDepartmentDto.name,
        users: updateDepartmentDto.users?.length
          ? { set: updateDepartmentDto.users.map(userId => ({ userId })) }
          : undefined
      }
    })
  }

  // Удалить департамент
  async remove(departmentId: number) {
    return this.prisma.department.delete({
      where: { departmentId }
    })
  }
}

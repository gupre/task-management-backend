import {
  BadRequestException,
  forwardRef,
  Inject,
  Injectable,
  NotFoundException
} from '@nestjs/common'
import { hash } from 'argon2'
import { RegistrationDto } from 'src/auth/dto/auth.dto'
import { TaskService } from 'src/task/task.service'
import { PrismaService } from '../prisma.service'
import { UserDto } from './user.dto'

@Injectable()
export class UserService {
  constructor(
    private prisma: PrismaService,
    @Inject(forwardRef(() => TaskService))
    private taskService: TaskService
  ) {}

  async create(dto: RegistrationDto) {
    const oldUser = await this.prisma.user.findUnique({
      where: { email: dto.email }
    })
    if (oldUser) throw new BadRequestException('User already exists')

    const isFirstUser = (await this.prisma.user.count()) === 0

    const user = {
      email: dto.email,
      name: dto.name,
      password: await hash(dto.password),
      timezone: {
        connect: { timezoneId: dto.timezoneId }
      },
      role: { connect: { roleId: isFirstUser ? 1 : 2 } }, // 1 - Администратор, 2 - Обычный пользователь
      isActive: isFirstUser ? true : false,
      isAdmin: isFirstUser ? true : false,
      // Если департамент существует, подключаем его
      department: {
        connect: { departmentId: isFirstUser ? 1 : dto.departmentId }
      }
    }

    return this.prisma.user.create({
      data: user
    })
  }

  async findAll() {
    return this.prisma.user.findMany({
      include: {
        unavailabilityPeriods: true
      }
    })
  }

  async getById(id: number) {
    const user = await this.prisma.user.findUnique({
      where: { userId: id },
      include: { role: true, unavailabilityPeriods: true }
    })

    if (!user) throw new NotFoundException('User not found')

    return user
  }

  async getByEmail(email: string) {
    if (!this.prisma.user) throw new NotFoundException('User not found')

    return this.prisma.user.findUnique({
      where: { email }
    })
  }

  async update(id: number, dto: UserDto) {
    const {
      password,
      timezoneId,
      departmentId,
      roleId,
      unavailabilityPeriods,
      ...rest
    } = dto

    const data: any = {
      ...rest
    }

    if (password) {
      data.password = await hash(password)
    }

    if (timezoneId !== undefined) {
      data.timezone = {
        connect: { timezoneId }
      }
    }

    if (departmentId !== undefined) {
      data.department = {
        connect: { departmentId }
      }
    }

    if (roleId !== undefined) {
      data.role = {
        connect: { roleId }
      }
    }

    await this.prisma.unavailability.deleteMany({
      where: { userId: id }
    })

    if (dto.unavailabilityPeriods?.length) {
      data.unavailabilityPeriods = {
        create: dto.unavailabilityPeriods.map(period => ({
          type: period.type,
          start: new Date(period.start),
          end: period.end ? new Date(period.end) : null,
          active: period.active
        }))
      }
    }

    const updatedUser = await this.prisma.user.update({
      where: { userId: id },
      data
    })

    // Вызов перераспределения
    // await this.taskService.reassignTasksForUnavailableUser(id, id)

    return updatedUser
  }

  async remove(id: number) {
    return this.prisma.user.delete({
      where: { userId: id }
    })
  }

  async activateUser(userId: number, createId: number, status: boolean) {
    const user = await this.prisma.user.findUnique({ where: { userId } })

    if (!user) {
      throw new NotFoundException('Пользователь не найден')
    }

    if (user.isActive && status) {
      throw new BadRequestException('Пользователь уже активирован')
    }

    const updatedUser = await this.prisma.user.update({
      where: { userId },
      data: { isActive: status }
    })

    if (!status) {
      // все задачи убрать!!!!!!!!!!
      await this.taskService.reassignTasksForUnavailableUser(userId, createId)
    }
    return updatedUser
  }

  async assignDepartment(userId: number, departmentId: number) {
    const user = await this.prisma.user.findUnique({ where: { userId } })

    if (!user) {
      throw new NotFoundException('Пользователь не найден')
    }

    //исправить!
    const department = await this.prisma.department.findUnique({
      where: { departmentId }
    })

    if (!department) {
      throw new NotFoundException('Департамент не найден')
    }

    return this.prisma.user.update({
      where: { userId },
      data: { department: { connect: { departmentId } } }
    })
  }

  async updateUserByAdmin(userId: number, createId: number, dto: UserDto) {
    const user = await this.prisma.user.findUnique({ where: { userId } })

    if (!user) {
      throw new NotFoundException('Пользователь не найден')
    }

    const dataToUpdate: any = {}

    if (dto.email) {
      dataToUpdate.email = dto.email
    }

    if (dto.workingHours) {
      dataToUpdate.workingHours = dto.workingHours
    }

    let updatedUser = await this.prisma.user.update({
      where: { userId },
      data: dataToUpdate
    })

    // Обновляем периоды недоступности, если они переданы
    if (dto.unavailabilityPeriods?.length) {
      // Удаляем старые периоды
      await this.prisma.unavailability.deleteMany({
        where: { userId }
      })

      // Добавляем новые
      await this.prisma.unavailability.createMany({
        data: dto.unavailabilityPeriods.map(period => ({
          userId,
          type: period.type,
          start: new Date(period.start),
          end: period.end ? new Date(period.end) : null,
          active: period.active ?? true
        }))
      })

      updatedUser = await this.prisma.user.findUnique({
        where: { userId },
        include: {
          tasks: {
            where: {
              status: {
                in: ['planned', 'progress']
              }
            },
            select: {
              estimatedHours: true,
              assignmentDate: true,
              dueDate: true,
              hoursSpent: true,
              history: true
            }
          },
          timezone: true,
          unavailabilityPeriods: true
        }
      })
      // Перераспределение задач
      await this.taskService.reassignTasksForUnavailableUser(userId, createId)
    }

    return updatedUser
  }

  async changeUserRole(userId: number, roleId: number) {
    const user = await this.prisma.user.findUnique({ where: { userId } })

    if (!user) {
      throw new NotFoundException('Пользователь не найден')
    }

    const role = await this.prisma.role.findUnique({ where: { roleId } })

    if (!role) {
      throw new NotFoundException('Роль не найдена')
    }

    const isAdmin = roleId === 1

    return this.prisma.user.update({
      where: { userId },
      data: {
        role: { connect: { roleId } },
        isAdmin
      }
    })
  }
}

import {
  BadRequestException,
  Injectable,
  NotFoundException
} from '@nestjs/common'
import { hash } from 'argon2'
import { RegistrationDto } from 'src/auth/dto/auth.dto'
import { PrismaService } from '../prisma.service'
import { UserDto } from './user.dto'

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

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
    return this.prisma.user.findMany()
  }

  async getById(id: number) {
    if (!this.prisma.user) throw new NotFoundException('User not found')

    return this.prisma.user.findUnique({
      where: { userId: id },
      include: { role: true }
    })
  }

  async getByEmail(email: string) {
    if (!this.prisma.user) throw new NotFoundException('User not found')

    return this.prisma.user.findUnique({
      where: { email }
    })
  }

  async update(id: number, dto: UserDto) {
    let data = dto

    if (dto.password) {
      data = { ...dto, password: await hash(dto.password) }
    }

    return this.prisma.user.update({
      where: { userId: id },
      data
    })
  }

  async remove(id: number) {
    return this.prisma.user.delete({
      where: { userId: id }
    })
  }

  async activateUser(userId: number, status: boolean) {
    const user = await this.prisma.user.findUnique({ where: { userId } })

    if (!user) {
      throw new NotFoundException('Пользователь не найден')
    }

    if (user.isActive && status) {
      throw new BadRequestException('Пользователь уже активирован')
    }

    return this.prisma.user.update({
      where: { userId },
      data: { isActive: status }
    })
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

  async changeUserRole(userId: number, roleId: number) {
    const user = await this.prisma.user.findUnique({ where: { userId } })

    if (!user) {
      throw new NotFoundException('Пользователь не найден')
    }

    const role = await this.prisma.role.findUnique({ where: { roleId } })

    if (!role) {
      throw new NotFoundException('Роль не найдена')
    }

    return this.prisma.user.update({
      where: { userId },
      data: { role: { connect: { roleId } } }
    })
  }
}

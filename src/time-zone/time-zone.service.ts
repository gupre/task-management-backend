import { Injectable } from '@nestjs/common'
import { PrismaService } from 'src/prisma.service'
import { CreateTimeZoneDto, UpdateTimeZoneDto } from './time-zone.dto'

@Injectable()
export class TimeZoneService {
  constructor(private prisma: PrismaService) {}

  // Создание временной зоны
  async create(data: CreateTimeZoneDto): Promise<CreateTimeZoneDto> {
    const timeZone = await this.prisma.timeZone.create({
      data: {
        name: data.name,
        offset: data.offset
      },
      include: { users: true }
    })

    return {
      name: timeZone.name,
      offset: timeZone.offset,
      users: timeZone.users.map(user => user.userId)
    }
  }

  // Получение всех временных зон
  async getAll(): Promise<CreateTimeZoneDto[]> {
    const timeZones = await this.prisma.timeZone.findMany({
      include: { users: true }
    })

    return timeZones.map(timeZone => ({
      name: timeZone.name,
      offset: timeZone.offset,
      users: timeZone.users.map(user => user.userId)
    }))
  }

  // Получение временной зоны по ID
  async getById(timezoneId: number): Promise<CreateTimeZoneDto | null> {
    const timeZone = await this.prisma.timeZone.findUnique({
      where: { timezoneId },
      include: { users: true }
    })

    if (!timeZone) return null

    return {
      name: timeZone.name,
      offset: timeZone.offset,
      users: timeZone.users.map(user => user.userId)
    }
  }

  // Добавление пользователя в временную зону
  async addUserToTimeZone(timezoneId: number, userId: number) {
    return this.prisma.timeZone.update({
      where: { timezoneId },
      data: {
        users: {
          connect: { userId }
        }
      }
    })
  }

  // Удаление пользователя из временной зоны
  async removeUserFromTimeZone(timezoneId: number, userId: number) {
    return this.prisma.timeZone.update({
      where: { timezoneId },
      data: {
        users: {
          disconnect: { userId }
        }
      }
    })
  }

  // Замена всех пользователей временной зоны
  async setUsersForTimeZone(timezoneId: number, userIds: number[]) {
    return this.prisma.timeZone.update({
      where: { timezoneId },
      data: {
        users: {
          set: userIds.map(userId => ({ userId }))
        }
      }
    })
  }

  // Обновление временной зоны
  async update(
    timezoneId: number,
    data: UpdateTimeZoneDto
  ): Promise<UpdateTimeZoneDto> {
    return this.prisma.timeZone
      .update({
        where: { timezoneId },
        data: {
          name: data.name,
          offset: data.offset
        },
        include: { users: true }
      })
      .then(timeZone => ({
        name: timeZone.name,
        offset: timeZone.offset,
        users: timeZone.users.map(user => user.userId)
      }))
  }

  // Удаление временной зоны
  async remove(timezoneId: number): Promise<CreateTimeZoneDto> {
    const timeZone = await this.prisma.timeZone.delete({
      where: { timezoneId },
      include: { users: true }
    })

    return {
      name: timeZone.name,
      offset: timeZone.offset,
      users: timeZone.users.map(user => user.userId)
    }
  }
}

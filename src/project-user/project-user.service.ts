import { Injectable, NotFoundException } from '@nestjs/common'
import { NotificationService } from 'src/notification/notification.service'
import { PrismaService } from '../prisma.service'
import { CreateProjectUserDto } from './project-user.dto'

@Injectable()
export class ProjectUserService {
  constructor(
    private prisma: PrismaService,
    private notificationService: NotificationService
  ) {}

  async getProjectUsers(projectId: number) {
    return await this.prisma.projectUser.findMany({
      where: { projectId },
      include: {
        user: true
      }
    })
  }

  async getUserProjects(userId: number) {
    return await this.prisma.projectUser.findMany({
      where: { userId },
      include: {
        project: true
      }
    })
  }

  async addUserToProject(dto: CreateProjectUserDto, projectName: string) {
    const userExists = await this.prisma.user.findUnique({
      where: { userId: dto.userId }
    })

    if (!userExists) {
      throw new NotFoundException('Пользователь не найден')
    }

    await this.notificationService.notifyUser(
      userExists.userId,
      'Вы добавлены в проект',
      `Вы были добавлены в проект "${projectName}". Ознакомьтесь с задачами и сроками выполнения.`,
      'web'
    )

    return this.prisma.projectUser.create({
      data: { projectId: dto.projectId, userId: dto.userId }
    })
  }

  async addUsersToProject(projectId: number, userIds: number[]) {
    const existingUsers = await this.prisma.projectUser.findMany({
      where: {
        projectId,
        userId: { in: userIds }
      },
      select: { userId: true }
    })

    const existingUserIds = new Set(existingUsers.map(user => user.userId))
    const newUserIds = userIds.filter(id => !existingUserIds.has(id))

    if (newUserIds.length > 0) {
      await this.prisma.projectUser.createMany({
        data: newUserIds.map(userId => ({
          projectId,
          userId
        }))
      })
    }

    return { message: 'Пользователи добавлены в проект' }
  }

  async updateProjectUsers(projectId: number, userIds: number[]) {
    await this.prisma.projectUser.deleteMany({
      where: { projectId }
    })

    if (userIds.length > 0) {
      await this.prisma.projectUser.createMany({
        data: userIds.map(userId => ({
          projectId,
          userId
        }))
      })
    }

    return { message: 'Пользователи обновлены' }
  }

  async removeAllUsersFromProject(projectId: number) {
    return this.prisma.projectUser.deleteMany({
      where: { projectId }
    })
  }

  async removeUserFromProject(dto: CreateProjectUserDto, projectName) {
    const projectUser = await this.prisma.projectUser.findFirst({
      where: { projectId: dto.projectId, userId: dto.userId }
    })

    if (!projectUser)
      throw new NotFoundException('Пользователь не привязан к проекту')

    await this.notificationService.notifyUser(
      projectUser.userId,
      'Вы добавлены в проект',
      `Вы были добавлены в проект "${projectName}". Ознакомьтесь с задачами и сроками выполнения.`,
      'web'
    )

    return this.prisma.projectUser.delete({
      where: {
        userId_projectId: {
          projectId: dto.projectId,
          userId: dto.userId
        }
      }
    })
  }

  // project-user.service.ts
  // async removeUserFromProject(projectId: number, userId: number) {
  //   return this.prisma.projectUser.delete({
  //     where: {
  //       userId_projectId: {
  //         projectId,
  //         userId
  //       }
  //     }
  //   })
  // }
}

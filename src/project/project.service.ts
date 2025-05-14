import { Injectable, NotFoundException } from '@nestjs/common'
import { Priority, Status } from 'prisma/generated/client'
import { ProjectUserService } from 'src/project-user/project-user.service'
import { CreateReportProjectDto } from 'src/report-project/report-project.dto'
import { ReportProjectService } from 'src/report-project/report-project.service'
import { TaskService } from 'src/task/task.service'
import { PrismaService } from '../prisma.service'
import { CreateProjectDto, UpdateProjectDto } from './project.dto'

@Injectable()
export class ProjectService {
  constructor(
    private prisma: PrismaService,
    private projectUserService: ProjectUserService,
    private taskService: TaskService,
    private reportProjectService: ReportProjectService
  ) {}

  async create(dto: CreateProjectDto) {
    const data: any = {
      name: dto.name,
      status: dto.status,
      startDate: dto.startDate,
      ...(dto.endDate && { endDate: dto.endDate }),
      ...(dto.description && { description: dto.description })
    }

    const project = await this.prisma.project.create({ data })

    if (dto.users && dto.users.length > 0) {
      await this.projectUserService.addUsersToProject(
        project.projectId,
        dto.users.map(user => user.userId)
      )
    }

    return project
  }

  async getAll() {
    return this.prisma.project.findMany({
      include: {
        users: { include: { user: true } },
        tasks: true,
        reports: true
      }
    })
  }

  async getById(id: number) {
    const project = await this.prisma.project.findUnique({
      where: { projectId: id },
      include: {
        users: { include: { user: true } },
        tasks: true,
        reports: true
      }
    })

    if (!project) throw new NotFoundException('Проект не найден')

    return project
  }

  // Обновление проекта
  async update(id: number, dto: UpdateProjectDto) {
    const updatedProject = await this.prisma.project.update({
      where: { projectId: id },
      data: {
        name: dto.name,
        description: dto.description,
        startDate: dto.startDate,
        endDate: dto.endDate,
        status: dto.status
      }
    })

    if (dto.users) {
      await this.projectUserService.updateProjectUsers(
        id,
        dto.users.map(user => user.userId)
      )
    }

    return updatedProject
  }

  // Добавление пользователя к проекту
  async addUserToProject(projectId: number, userId: number) {
    const project = await this.getById(projectId)
    const projectName = project.name

    return this.projectUserService.addUserToProject(
      { projectId, userId },
      projectName
    )
  }

  async removeUserFromProject(projectId: number, userId: number) {
    const project = await this.getById(projectId)
    const projectName = project.name

    // Удаляем пользователя из проекта
    const removedUser = await this.projectUserService.removeUserFromProject(
      {
        projectId,
        userId
      },
      projectName
    )
    if (!removedUser) {
      throw new NotFoundException('Пользователь не найден в проекте')
    }
    return removedUser
  }

  async createProjectReport(
    projectId: number,
    reportData: CreateReportProjectDto
  ) {
    return this.reportProjectService.create({ projectId, ...reportData })
  }

  async createProjectTask(
    projectId: number,
    taskData: { name: string; description: string },
    user: { userId: number; departmentId: number }
  ) {
    return this.taskService.create(
      {
        ...taskData,
        projectId,
        status: Status.planned,
        order: 0,
        priority: Priority.normal
      },
      user
    )
  }

  // Получение всех отчётов проекта
  async getProjectReports(projectId: number) {
    return this.reportProjectService.getReportsByProjectId(projectId)
  }

  async getProjectUsers(projectId: number) {
    return this.prisma.projectUser.findMany({
      where: { projectId },
      include: {
        user: {
          select: {
            userId: true,
            name: true,
            email: true,
            role: true
          }
        }
      }
    })
  }

  async remove(id: number) {
    await this.projectUserService.removeAllUsersFromProject(id)

    return this.prisma.project.delete({
      where: { projectId: id }
    })
  }
}

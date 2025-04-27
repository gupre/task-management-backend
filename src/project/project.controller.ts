import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  NotFoundException,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  UsePipes,
  ValidationPipe
} from '@nestjs/common'
import { Auth } from 'src/auth/decorators/auth.decorator'
import { CurrentUser } from 'src/auth/decorators/user.decorator'
import { CreateReportProjectDto } from 'src/report-project/report-project.dto'
import { CreateProjectDto, UpdateProjectDto } from './project.dto'
import { ProjectService } from './project.service'

@Controller('projects')
export class ProjectController {
  userService: any
  constructor(private projectService: ProjectService) {}

  @UsePipes(new ValidationPipe())
  @HttpCode(200)
  @Post()
  async create(
    @Body()
    сreateProjectDto: CreateProjectDto
  ) {
    return this.projectService.create(сreateProjectDto)
  }

  @Auth()
  @Get()
  async findAll() {
    return this.projectService.getAll()
  }

  @UsePipes(new ValidationPipe())
  @Auth()
  @Get(':id')
  async findId(@Param('id', ParseIntPipe) id: number) {
    return this.projectService.getById(+id)
  }

  @HttpCode(200)
  @Auth()
  @Post(':id/users/:userId')
  async addUserToProject(
    @Param('id', ParseIntPipe) projectId: number,
    @Param('userId', ParseIntPipe) userId: number
  ) {
    return this.projectService.addUserToProject(+projectId, +userId)
  }

  @HttpCode(200)
  @Auth()
  @Delete(':id/users/:userId')
  async removeUserFromProject(
    @Param('id', ParseIntPipe) projectId: number,
    @Param('userId', ParseIntPipe) userId: number
  ) {
    return this.projectService.removeUserFromProject(projectId, userId)
  }

  @HttpCode(200)
  @Auth()
  @Get(':id/users')
  async getProjectUsers(@Param('id', ParseIntPipe) id: number) {
    return this.projectService.getProjectUsers(id)
  }

  // Создание отчёта по проекту
  @HttpCode(200)
  @Auth()
  @Post(':id/reports')
  async createProjectReport(
    @Param('id', ParseIntPipe) projectId: number,
    @Body() reportData: CreateReportProjectDto
  ) {
    return this.projectService.createProjectReport(+projectId, reportData)
  }

  // Создание задачи в проекте
  @HttpCode(200)
  @Auth()
  @Post(':id/tasks/user/:userId')
  async createProjectTask(
    @Param('id', ParseIntPipe) projectId: number,
    @Body() taskData: { name: string; description: string },
    @CurrentUser('userId', ParseIntPipe) userId: number
  ) {
    const user = await this.userService.getById(+userId)
    if (!user) {
      throw new NotFoundException('Пользователь не найден')
    }
    return this.projectService.createProjectTask(+projectId, taskData, {
      userId: user.userId,
      departmentId: user.departmentId
    })
  }

  // Получение отчётов по проекту
  @Auth()
  @Get(':id/reports')
  async getProjectReports(@Param('id', ParseIntPipe) projectId: number) {
    return this.projectService.getProjectReports(+projectId)
  }

  // @UsePipes(new ValidationPipe())
  @UsePipes(
    new ValidationPipe({ whitelist: true, forbidNonWhitelisted: false })
  )
  @HttpCode(200)
  @Auth()
  @Patch(':id')
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body()
    updateProjectDto: UpdateProjectDto
  ) {
    return this.projectService.update(+id, updateProjectDto)
  }

  @HttpCode(200)
  @Auth()
  @Delete(':id')
  async remove(@Param('id') id: number) {
    return this.projectService.remove(+id)
  }
}

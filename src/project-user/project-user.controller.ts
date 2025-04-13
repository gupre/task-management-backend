import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  Param,
  ParseIntPipe,
  Post,
  Put,
  UsePipes,
  ValidationPipe
} from '@nestjs/common'
import { Auth } from 'src/auth/decorators/auth.decorator'
import { CurrentUser } from 'src/auth/decorators/user.decorator'
import { CreateProjectUserDto } from './project-user.dto'
import { ProjectUserService } from './project-user.service'

@Controller('project-user')
export class ProjectUserController {
  constructor(private readonly projectUserService: ProjectUserService) {}

  @UsePipes(new ValidationPipe())
  @Auth()
  @Get('/users/:userId')
  async getMyProjects(@CurrentUser('userId', ParseIntPipe) userId: number) {
    return this.projectUserService.getUserProjects(+userId)
  }

  @UsePipes(new ValidationPipe())
  @Auth()
  @Get('project/:projectId')
  async getProjectUsers(@Param('projectId', ParseIntPipe) projectId: number) {
    return this.projectUserService.getProjectUsers(projectId)
  }

  @UsePipes(new ValidationPipe())
  @HttpCode(200)
  @Auth()
  @Post()
  async addUserToProject(@Body() dto: CreateProjectUserDto) {
    return this.projectUserService.addUserToProject(dto)
  }

  @UsePipes(new ValidationPipe())
  @HttpCode(200)
  @Auth()
  @Post(':projectId/add-users')
  async addUsersToProject(
    @Param('projectId', ParseIntPipe) projectId: number,
    @Body('userIds') userIds: number[]
  ) {
    return this.projectUserService.addUsersToProject(+projectId, userIds)
  }

  @UsePipes(new ValidationPipe())
  @HttpCode(200)
  @Auth()
  @Put(':projectId/update-users')
  async updateProjectUsers(
    @Param('projectId', ParseIntPipe) projectId: number,
    @Body('userIds') userIds: number[]
  ) {
    return this.projectUserService.updateProjectUsers(+projectId, userIds)
  }

  @HttpCode(200)
  @Auth()
  @Delete(':projectId/remove-all')
  async removeAllUsersFromProject(
    @Param('projectId', ParseIntPipe) projectId: number
  ) {
    return this.projectUserService.removeAllUsersFromProject(+projectId)
  }

  @UsePipes(new ValidationPipe())
  @HttpCode(200)
  @Auth()
  @Delete()
  async removeUserFromProject(@Body() dto: CreateProjectUserDto) {
    return this.projectUserService.removeUserFromProject(dto)
  }
}

import {
  Body,
  Controller,
  Delete,
  HttpCode,
  Param,
  ParseIntPipe,
  Post,
  Put,
  UsePipes,
  ValidationPipe
} from '@nestjs/common'
import { Auth } from 'src/auth/decorators/auth.decorator'
import { CreateProjectUserDto } from './project-user.dto'
import { ProjectUserService } from './project-user.service'

@Controller('project-user')
export class ProjectUserController {
  constructor(private readonly projectUserService: ProjectUserService) {}

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

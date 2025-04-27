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
import { UserService } from 'src/user/user.service'
import { CreateTaskDto, UpdateTaskDto, UpdateTaskOrderDto } from './task.dto'
import { TaskService } from './task.service'

@Controller('task')
export class TaskController {
  constructor(
    private readonly taskService: TaskService,
    private readonly userService: UserService
  ) {}

  @UsePipes(new ValidationPipe())
  @HttpCode(200)
  @Auth()
  @Post('user/:id')
  async create(
    @CurrentUser('userId', ParseIntPipe) id: number,
    @Body() createTaskDto: CreateTaskDto
  ) {
    const user = await this.userService.getById(+id)
    if (!user) {
      throw new NotFoundException('Пользователь не найден')
    }
    return this.taskService.create(createTaskDto, {
      userId: user.userId,
      departmentId: user.departmentId
    })
  }

  @Auth()
  @Get(':id')
  async findId(@Param('id', ParseIntPipe) id: number) {
    return this.taskService.getById(+id)
  }

  // @Auth()
  // @Get(':id/reports')
  // async getReportsByTaskId(@Param('id', ParseIntPipe) id: number) {
  //   return this.taskService.getReportsByTaskId(+id)
  // }

  @Auth()
  @Get(':id/history')
  async getHistoryByTaskId(@Param('id', ParseIntPipe) id: number) {
    return this.taskService.getHistoryByTaskId(+id)
  }

  // Назначение задачи пользователю
  @Auth()
  @Patch(':id/assign/:userId/user/:createUserId')
  async assign(
    @Param('id', ParseIntPipe) id: number,
    @Param('userId', ParseIntPipe) userId: number,
    @Param('createUserId', ParseIntPipe) createUserId: number
  ) {
    const user = await this.userService.getById(+createUserId)
    if (!user) {
      throw new NotFoundException('Пользователь не найден')
    }

    return this.taskService.assignTaskToUser(+id, +userId, {
      userId: user.userId,
      departmentId: user.departmentId
    })
  }

  @UsePipes(new ValidationPipe())
  @HttpCode(200)
  @Auth()
  @Patch(':id/user/:createUserId')
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Param('createUserId', ParseIntPipe) createUserId: number,
    @Body() updateTaskDto: UpdateTaskDto
  ) {
    const user = await this.userService.getById(+createUserId)
    if (!user) {
      throw new NotFoundException('Пользователь не найден')
    }

    return this.taskService.update(+id, updateTaskDto, {
      userId: user.userId,
      departmentId: user.departmentId
    })
  }

  @UsePipes(new ValidationPipe())
  @HttpCode(200)
  @Auth()
  @Delete(':id')
  async remove(@Param('id', ParseIntPipe) id: number) {
    return this.taskService.remove(+id)
  }

  @Auth()
  @Get('project/:projectId')
  async getTasksByProject(@Param('projectId', ParseIntPipe) projectId: number) {
    return this.taskService.getTasksByProject(+projectId)
  }

  @UsePipes(new ValidationPipe({ whitelist: true, forbidNonWhitelisted: true }))
  @HttpCode(200)
  @Auth()
  @Patch('order')
  async updateOrder(@Body() body: UpdateTaskOrderDto) {
    return this.taskService.updateTaskOrder(body.taskIds)
  }
}

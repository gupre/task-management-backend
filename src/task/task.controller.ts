import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  UsePipes,
  ValidationPipe
} from '@nestjs/common'
import { Auth } from 'src/auth/decorators/auth.decorator'
import { CreateTaskDto, UpdateTaskDto } from './task.dto'
import { TaskService } from './task.service'

@Controller('task')
export class TaskController {
  constructor(private readonly taskService: TaskService) {}

  @UsePipes(new ValidationPipe())
  @HttpCode(200)
  @Auth()
  @Post()
  async create(@Body() createTaskDto: CreateTaskDto) {
    return this.taskService.create(createTaskDto)
  }

  @Auth()
  @Get(':id')
  async findId(@Param('id', ParseIntPipe) id: number) {
    return this.taskService.getById(id)
  }

  @Auth()
  @Get(':id')
  async getReportsByTaskId(@Param('id', ParseIntPipe) id: number) {
    return this.taskService.getReportsByTaskId(id)
  }

  @Auth()
  @Get(':id')
  async getHistoryByTaskId(@Param('id', ParseIntPipe) id: number) {
    return this.taskService.getHistoryByTaskId(id)
  }

  // Назначение задачи пользователю
  @Auth()
  @Patch(':id/assign/:userId')
  async assign(
    @Param('id', ParseIntPipe) id: number,
    @Param('userId', ParseIntPipe) userId: number
  ) {
    return this.taskService.assignTaskToUser(id, userId)
  }

  @UsePipes(new ValidationPipe())
  @HttpCode(200)
  @Auth()
  @Patch(':id')
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateTaskDto: UpdateTaskDto
  ) {
    return this.taskService.update(id, updateTaskDto)
  }

  @UsePipes(new ValidationPipe())
  @HttpCode(200)
  @Auth()
  @Delete(':id')
  async remove(@Param('id', ParseIntPipe) id: number) {
    return this.taskService.remove(id)
  }
}

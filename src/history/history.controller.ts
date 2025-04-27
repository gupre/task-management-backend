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
import { HistoryDto } from './history.dto'
import { HistoryService } from './history.service'

@Controller('history')
export class HistoryController {
  constructor(
    private historyService: HistoryService,
    private readonly userService: UserService
  ) {}

  // Создать запись в истории
  @UsePipes(new ValidationPipe())
  @HttpCode(200)
  @Auth()
  @Post('user/:id')
  async createHistory(
    @CurrentUser('userId', ParseIntPipe) id: number,
    @Body() createHistoryDto: HistoryDto
  ) {
    const user = await this.userService.getById(+id)
    if (!user) {
      throw new NotFoundException('Пользователь не найден')
    }

    // Обогащаем DTO дополнительными данными
    const enrichedHistoryDto = {
      ...createHistoryDto,
      createdByUserId: id,
      createdByDepartmentId: user.departmentId
    }

    // Передаем обновленное DTO в сервис
    return this.historyService.create(enrichedHistoryDto)
    //   return this.historyService.create(createHistoryDto)
  }

  // Получить историю по ID задачи
  @Auth()
  @Get('task/:taskId')
  async getHistoryByTask(@Param('taskId') taskId: number) {
    return this.historyService.getByTaskId(+taskId)
  }

  // Обновить запись в истории
  @UsePipes(new ValidationPipe())
  @HttpCode(200)
  @Auth()
  @Patch(':id')
  async updateHistory(
    @Param('id') id: number,
    @Body() updateHistoryDto: HistoryDto
  ) {
    return this.historyService.update(+id, updateHistoryDto)
  }

  // Удалить запись в истории
  @UsePipes(new ValidationPipe())
  @HttpCode(200)
  @Auth()
  @Delete(':id')
  async deleteHistory(@Param('id') id: number) {
    return this.historyService.remove(+id)
  }
}

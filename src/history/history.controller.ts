import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  Param,
  Patch,
  Post,
  UsePipes,
  ValidationPipe
} from '@nestjs/common'
import { Auth } from 'src/auth/decorators/auth.decorator'
import { HistoryDto } from './history.dto'
import { HistoryService } from './history.service'

@Controller('history')
export class HistoryController {
  constructor(private historyService: HistoryService) {}

  // Создать запись в истории
  @UsePipes(new ValidationPipe())
  @HttpCode(200)
  @Auth()
  @Post()
  async createHistory(@Body() createHistoryDto: HistoryDto) {
    return this.historyService.create(createHistoryDto)
  }

  // Получить историю по ID задачи
  @Auth()
  @Get('task/:taskId')
  async getHistoryByTask(@Param('taskId') taskId: number) {
    return this.historyService.getByTaskId(taskId)
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
    return this.historyService.update(id, updateHistoryDto)
  }

  // Удалить запись в истории
  @UsePipes(new ValidationPipe())
  @HttpCode(200)
  @Auth()
  @Delete(':id')
  async deleteHistory(@Param('id') id: number) {
    return this.historyService.remove(id)
  }
}

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
import { CreateTimeZoneDto, UpdateTimeZoneDto } from './time-zone.dto'
import { TimeZoneService } from './time-zone.service'

@Controller('time-zones')
export class TimeZoneController {
  constructor(private readonly timeZoneService: TimeZoneService) {}

  // Создание временной зоны
  @HttpCode(200)
  @UsePipes(new ValidationPipe())
  @Auth()
  @Post()
  async create(@Body() data: CreateTimeZoneDto) {
    return this.timeZoneService.create(data)
  }

  // Получение всех временных зон
  @Auth()
  @Get()
  async getAll() {
    return this.timeZoneService.getAll()
  }

  // Получение временной зоны по ID
  @Auth()
  @Get(':id')
  async getById(@Param('id', ParseIntPipe) id: number) {
    return this.timeZoneService.getById(Number(id))
  }

  // Добавление пользователя в временную зону
  @HttpCode(200)
  @Auth()
  @Patch(':id/users/:userId/add')
  async addUserToTimeZone(
    @Param('id', ParseIntPipe) id: number,
    @Param('userId', ParseIntPipe) userId: number
  ) {
    return this.timeZoneService.addUserToTimeZone(id, userId)
  }

  // Удаление пользователя из временной зоны
  @HttpCode(200)
  @Auth()
  @Patch(':id/users/:userId/remove')
  async removeUserFromTimeZone(
    @Param('id', ParseIntPipe) id: number,
    @Param('userId', ParseIntPipe) userId: number
  ) {
    return this.timeZoneService.removeUserFromTimeZone(id, userId)
  }

  // Установка пользователей для временной зоны
  @HttpCode(200)
  @Auth()
  @Patch(':id/users/set')
  async setUsersForTimeZone(
    @Param('id', ParseIntPipe) id: number,
    @Body() userIds: { userIds: number[] }
  ) {
    return this.timeZoneService.setUsersForTimeZone(id, userIds.userIds)
  }

  // Обновление временной зоны
  @HttpCode(200)
  @UsePipes(new ValidationPipe())
  @Auth()
  @Patch(':id')
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() data: UpdateTimeZoneDto
  ) {
    return this.timeZoneService.update(id, data)
  }

  // Удаление временной зоны
  @HttpCode(200)
  @UsePipes(new ValidationPipe())
  @Auth()
  @Delete(':id')
  async delete(@Param('id, ParseIntPipe') id: number) {
    return this.timeZoneService.remove(id)
  }
}

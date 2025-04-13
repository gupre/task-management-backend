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
import { CreatePermissionsDto, UpdatePermissionsDto } from './permissions.dto'
import { PermissionsService } from './permissions.service'

@Controller('permissions')
export class PermissionsController {
  constructor(private readonly permissionsService: PermissionsService) {}

  // Создание разрешения
  @UsePipes(new ValidationPipe())
  @HttpCode(200)
  @Auth()
  @Post()
  async create(@Body() data: CreatePermissionsDto) {
    return this.permissionsService.create(data)
  }

  // Получение всех разрешений
  @Auth()
  @Get()
  async getAll() {
    return this.permissionsService.getAll()
  }

  // Получение разрешения по ID
  @Auth()
  @Get(':id')
  async getById(@Param('id', ParseIntPipe) id: number) {
    return this.permissionsService.getById(+id)
  }

  @UsePipes(new ValidationPipe())
  @HttpCode(200)
  @Auth()
  @Post(':id/role/:roleId')
  async addRoleToPermission(
    @Param('id', ParseIntPipe) id: number,
    @Param('roleId', ParseIntPipe) roleId: number
  ) {
    return this.permissionsService.addRoleToPermission(+id, +roleId)
  }

  @UsePipes(new ValidationPipe())
  @HttpCode(200)
  @Auth()
  @Delete(':id/role/:roleId')
  async removeRoleFromPermission(
    @Param('id', ParseIntPipe) id: number,
    @Param('roleId', ParseIntPipe) roleId: number
  ) {
    return this.permissionsService.removeRoleFromPermission(+id, +roleId)
  }

  @UsePipes(new ValidationPipe())
  @HttpCode(200)
  @Auth()
  @Patch(':id/roles')
  async setRolesForPermission(
    @Param('id', ParseIntPipe) id: number,
    @Body() roleIds: number[]
  ) {
    return this.permissionsService.setRolesForPermission(+id, roleIds)
  }

  // Обновление разрешения
  @UsePipes(new ValidationPipe())
  @HttpCode(200)
  @Auth()
  @Patch(':id')
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() data: UpdatePermissionsDto
  ) {
    return this.permissionsService.update(+id, data)
  }

  // Удаление разрешения
  @UsePipes(new ValidationPipe())
  @HttpCode(200)
  @Auth()
  @Delete(':id')
  async delete(
    @Param('id', ParseIntPipe) id: number,
    @Param('roleId', ParseIntPipe) roleId: number
  ) {
    return this.permissionsService.remove(+id, roleId)
  }
}

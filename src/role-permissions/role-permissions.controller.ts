import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post
} from '@nestjs/common'
import { Auth } from 'src/auth/decorators/auth.decorator'
import { CreateRolePermissionsDto } from './role-permissions.dto'
import { RolePermissionsService } from './role-permissions.service'

@Controller('role-permissions')
export class RolePermissionsController {
  constructor(
    private readonly rolePermissionsService: RolePermissionsService
  ) {}

  // Метод для добавления разрешений к роли
  @Auth()
  @Post(':id')
  async addPermissionsToRole(
    @Param('id', ParseIntPipe) id: number, // ID роли из URL
    @Body() permissions: CreateRolePermissionsDto[] // Массив разрешений из тела запроса
  ) {
    return await this.rolePermissionsService.addPermissionsToRole(
      id,
      permissions
    )
  }

  // Метод для получения разрешений для роли
  @Auth()
  @Get(':id')
  async getPermissionsForRole(@Param('id', ParseIntPipe) id: number) {
    return await this.rolePermissionsService.getPermissionsForRole(+id)
  }

  // Метод для удаления разрешений с роли
  @Auth()
  @Delete(':id')
  async removePermissionsFromRole(
    @Param('id', ParseIntPipe) id: number, // ID роли из URL
    @Body() permissions: CreateRolePermissionsDto[] // Массив разрешений из тела запроса
  ) {
    return await this.rolePermissionsService.remove(+id, permissions)
  }
}

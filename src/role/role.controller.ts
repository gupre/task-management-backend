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
import { CreateRoleDto, UpdateRoleDto } from './role.dto'
import { RoleService } from './role.service'

@Controller('role')
export class RoleController {
  constructor(private readonly roleService: RoleService) {}

  @UsePipes(new ValidationPipe())
  @HttpCode(200)
  @Auth()
  @Post()
  async create(@Body() createRoleDto: CreateRoleDto) {
    return this.roleService.create(createRoleDto)
  }

  @UsePipes(new ValidationPipe())
  @HttpCode(200)
  @Auth()
  @Get()
  async findAll() {
    return this.roleService.findAll()
  }

  @Auth()
  @Get(':id')
  async findId(@Param('id', ParseIntPipe) id: number) {
    return this.roleService.getById(id)
  }

  @UsePipes(new ValidationPipe())
  @HttpCode(200)
  @Auth()
  @Patch(':id')
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateRoleDto: UpdateRoleDto
  ) {
    return this.roleService.update(id, updateRoleDto)
  }

  @UsePipes(new ValidationPipe())
  @HttpCode(200)
  @Auth()
  @Delete(':id')
  async remove(@Param('id', ParseIntPipe) id: number) {
    return this.roleService.remove(id)
  }
}

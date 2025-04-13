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
import { CreateDepartmentDto, UpdateDepartmentDto } from './department.dto'
import { departmentService } from './department.service'

@Controller('department')
export class departmentController {
  constructor(private readonly departmentService: departmentService) {}

  @UsePipes(new ValidationPipe())
  @HttpCode(200)
  @Auth()
  @Post()
  async createDepartment(@Body() createDepartmentDto: CreateDepartmentDto) {
    return this.departmentService.create(createDepartmentDto)
  }

  // @Auth()
  @Get()
  async getAllDepartments() {
    return this.departmentService.getAll()
  }

  @Auth()
  @Get(':id')
  async getDepartmentById(@Param('id', ParseIntPipe) id: number) {
    return this.departmentService.getById(+id)
  }

  @UsePipes(new ValidationPipe())
  @HttpCode(200)
  @Auth()
  @Post(':id/user/:userId')
  async addUserToDepartment(
    @Param('id', ParseIntPipe) id: number,
    @Param('userId', ParseIntPipe) userId: number
  ) {
    return this.departmentService.addUserToDepartment(+id, +userId)
  }

  @UsePipes(new ValidationPipe())
  @HttpCode(200)
  @Auth()
  @Delete(':id/user/:userId')
  async removeUserFromDepartment(
    @Param('id', ParseIntPipe) id: number,
    @Param('userId', ParseIntPipe) userId: number
  ) {
    return this.departmentService.removeUserFromDepartment(+id, +userId)
  }

  @Auth()
  @Get(':id/users')
  async getUsersById(@Param('id', ParseIntPipe) id: number) {
    return this.departmentService.getUsersById(+id)
  }

  @UsePipes(new ValidationPipe())
  @HttpCode(200)
  @Auth()
  @Patch(':id/users')
  async setUsersForDepartment(
    @Param('id', ParseIntPipe) id: number,
    @Body() userIds: number[]
  ) {
    return this.departmentService.setUsersForDepartment(+id, userIds)
  }

  @UsePipes(new ValidationPipe())
  @HttpCode(200)
  @Auth()
  @Patch(':id')
  async updateDepartment(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateDepartmentDto: UpdateDepartmentDto
  ) {
    return this.departmentService.update(+id, updateDepartmentDto)
  }

  @UsePipes(new ValidationPipe())
  @HttpCode(200)
  @Auth()
  @Delete(':id')
  async deleteDepartment(@Param('id', ParseIntPipe) id: number) {
    return this.departmentService.remove(+id)
  }
}

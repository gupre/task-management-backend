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
  Query,
  UsePipes,
  ValidationPipe
} from '@nestjs/common'
import * as bcrypt from 'bcrypt'
import { User } from 'prisma/generated/client'
import { Auth } from 'src/auth/decorators/auth.decorator'
import { CurrentUser } from 'src/auth/decorators/user.decorator'
import { RegistrationDto } from 'src/auth/dto/auth.dto'
import { Roles } from 'src/role/decorator/roles.decorator'
import { CheckPasswordDto, UserDto } from './user.dto'
import { UserService } from './user.service'

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @UsePipes(new ValidationPipe())
  @HttpCode(200)
  @Auth()
  @Post()
  async create(@Body() createUserDto: RegistrationDto): Promise<User> {
    return this.userService.create(createUserDto)
  }

  @Get()
  @Auth()
  async findAll(): Promise<User[]> {
    return this.userService.findAll()
  }

  @UsePipes(new ValidationPipe())
  @Get(':id')
  @Auth()
  async findId(
    @CurrentUser('userId', ParseIntPipe) id: number
  ): Promise<User | null> {
    return this.userService.getById(+id)
  }

  // Получение пользователя по email
  @UsePipes(new ValidationPipe())
  @Get('email/:email')
  @Auth()
  async getByEmail(@Param('email') email: string): Promise<User | null> {
    return this.userService.getByEmail(email)
  }

  @UsePipes(new ValidationPipe())
  @Post(':id/check-password')
  @Auth()
  async checkPassword(
    @CurrentUser('userId', ParseIntPipe) id: number,
    @Body() { password }: CheckPasswordDto
  ) {
    const user = await this.userService.getById(id)

    if (!user) {
      throw new NotFoundException('Пользователь не найден')
    }

    const isMatch = await bcrypt.compare(password, user.password)

    return { success: isMatch }
  }

  @UsePipes(new ValidationPipe())
  @HttpCode(200)
  @Patch(':id')
  @Auth()
  async update(
    @CurrentUser('userId', ParseIntPipe) id: number,
    @Body() updateUserDto: UserDto
  ): Promise<User> {
    return this.userService.update(+id, updateUserDto)
  }

  @UsePipes(new ValidationPipe())
  @HttpCode(200)
  @Auth()
  @Delete(':id')
  remove(@CurrentUser('userId', ParseIntPipe) id: number): Promise<User> {
    return this.userService.remove(+id)
  }

  @Roles('admin')
  @Patch(':id/activate')
  async changeActivateUser(
    @Param('id') id: number,
    @Query('status') status: boolean
  ) {
    return this.userService.activateUser(+id, status)
  }

  @Roles('admin')
  @Patch(':id/department/:departmentId')
  async assignDepartment(
    @Param('id', ParseIntPipe) userId: number,
    @Param('departmentId', ParseIntPipe) departmentId: number
  ) {
    return this.userService.assignDepartment(userId, departmentId)
  }

  @Roles('admin')
  @Patch(':id/role/:roleId')
  async changeUserRole(
    @Param('id', ParseIntPipe) userId: number,
    @Param('roleId', ParseIntPipe) roleId: number
  ) {
    return this.userService.changeUserRole(userId, roleId)
  }
}

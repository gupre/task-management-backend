import {
  IsBoolean,
  IsEmail,
  IsInt,
  IsOptional,
  IsString,
  Matches,
  MinLength
} from 'class-validator'

//Администратор (admin): флаг, указывающий, является ли пользователь системным администратором.

export class UserDto {
  @IsString()
  name?: string

  @IsEmail()
  email?: string

  @IsString()
  @Matches(/^(?=.*[A-Z])/, {
    message: 'Пароль должен содержать хотя бы одну заглавную букву'
  })
  @Matches(/^(?=.*\d)/, {
    message: 'Пароль должен содержать хотя бы одну цифру'
  })
  @Matches(/^(?=.*[@$!%*?&^#()_+\-=\[\]{};:'",.<>\/\\|`~])/, {
    message: 'Пароль должен содержать хотя бы один специальный символ'
  })
  @MinLength(8, {
    message: 'Пароль должен быть не менее 8 символов'
  })
  password?: string

  @IsInt()
  timezoneId?: number

  @IsInt()
  departmentId?: number

  @IsOptional()
  @IsInt({ each: true })
  tasksIds?: number[]

  @IsOptional()
  @IsInt({ each: true })
  projectsIds?: number[]

  @IsInt()
  roleId: number

  @IsBoolean()
  isActive: boolean

  @IsBoolean()
  isAdmin: boolean
}

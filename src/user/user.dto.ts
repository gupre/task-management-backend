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
  @IsOptional()
  @IsString()
  name?: string

  @IsOptional()
  @IsEmail()
  email?: string

  @IsOptional()
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

  @IsOptional()
  @IsInt()
  timezoneId?: number

  @IsOptional()
  @IsInt()
  departmentId?: number

  @IsOptional()
  @IsInt({ each: true })
  tasksIds?: number[]

  @IsOptional()
  @IsInt({ each: true })
  projectsIds?: number[]

  @IsOptional()
  @IsInt()
  roleId?: number

  @IsOptional()
  @IsBoolean()
  isActive?: boolean

  @IsOptional()
  @IsBoolean()
  isAdmin?: boolean
}

export class CheckPasswordDto {
  @IsString()
  @MinLength(8, { message: 'Пароль должен быть не менее 8 символов' })
  @Matches(/^(?=.*[A-Z])/, {
    message: 'Пароль должен содержать хотя бы одну заглавную букву'
  })
  @Matches(/^(?=.*\d)/, {
    message: 'Пароль должен содержать хотя бы одну цифру'
  })
  @Matches(/^(?=.*[@$!%*?&^#()_+\-=\[\]{};:\'",.<>\/\\|`~])/, {
    message: 'Пароль должен содержать хотя бы один специальный символ'
  })
  password: string
}

import {
  IsArray,
  IsBoolean,
  IsEmail,
  IsInt,
  IsObject,
  IsOptional,
  IsString,
  Matches,
  MinLength
} from 'class-validator'

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

  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  unavailableDates?: string[] // Добавлено для отпуска

  @IsOptional()
  @IsObject()
  workingHours?: {
    start: string
    end: string
  } // Добавлено для индивидуального графика
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

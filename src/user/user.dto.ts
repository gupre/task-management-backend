import { Type } from 'class-transformer'
import {
  IsArray,
  IsBoolean,
  IsDateString,
  IsEmail,
  IsEnum,
  IsInt,
  IsObject,
  IsOptional,
  IsString,
  Matches,
  MinLength,
  ValidateNested
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

  // @IsOptional()
  // @IsArray()
  // @IsString({ each: true })
  // unavailableDates?: string[]

  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => UnavailabilityPeriodDto)
  unavailabilityPeriods?: UnavailabilityPeriodDto[]

  @IsOptional()
  @IsObject()
  workingHours?: {
    start: string
    end: string
  }
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

export class UnavailabilityPeriodDto {
  @IsEnum(['vacation', 'sick', 'urgent'], {
    message: 'Тип недоступности должен быть vacation, sick или urgent'
  })
  type: 'vacation' | 'sick' | 'urgent'

  @IsDateString()
  start: string

  @IsOptional()
  @IsDateString()
  end?: string

  @IsOptional()
  @IsBoolean()
  active?: boolean // true если период ещё активен
}

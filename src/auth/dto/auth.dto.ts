import {
  IsEmail,
  IsInt,
  IsNotEmpty,
  IsOptional,
  IsString,
  Matches,
  MinLength
} from 'class-validator'

export class AuthDto {
  @IsNotEmpty()
  @IsEmail()
  email: string

  @IsNotEmpty()
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
  password: string
}

export class RegistrationDto extends AuthDto {
  @IsString()
  @IsNotEmpty()
  name: string

  @IsNotEmpty()
  @IsInt()
  timezoneId: number

  @IsOptional()
  @IsInt()
  departmentId?: number

  // @IsInt()
  // roleId?: number
}

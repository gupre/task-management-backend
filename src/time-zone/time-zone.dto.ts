import { PartialType } from '@nestjs/mapped-types'
import {
  IsArray,
  IsInt,
  IsNotEmpty,
  IsOptional,
  IsString,
  Max,
  Min
} from 'class-validator'

export class CreateTimeZoneDto {
  @IsString()
  @IsNotEmpty()
  name: string // Название временной зоны (например, "Europe/Moscow")

  @Min(-720, {
    message: 'Смещение не может быть меньше -720 минут (UTC-12:00)'
  })
  @Max(840, { message: 'Смещение не может быть больше 840 минут (UTC+14:00)' })
  @IsNotEmpty()
  @IsInt()
  offset: number // Смещение в минутах (например, 180 для UTC+3)

  @IsOptional()
  @IsArray()
  @IsInt({ each: true })
  users?: number[]
}

export class UpdateTimeZoneDto extends PartialType(CreateTimeZoneDto) {}

import { PartialType } from '@nestjs/mapped-types'
import {
  IsArray,
  IsInt,
  IsNotEmpty,
  IsOptional,
  IsString
} from 'class-validator'

export class CreateDepartmentDto {
  @IsString()
  @IsNotEmpty()
  name: string

  @IsArray()
  @IsInt({ each: true })
  @IsOptional()
  users?: number[]
}

export class UpdateDepartmentDto extends PartialType(CreateDepartmentDto) {}

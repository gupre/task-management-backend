import { PartialType } from '@nestjs/mapped-types'
import { Type } from 'class-transformer'
import {
  IsArray,
  IsDate,
  IsEnum,
  IsInt,
  IsNotEmpty,
  IsOptional,
  IsString,
  ValidateNested
} from 'class-validator'
import { Status } from 'prisma/generated/client'
import { CreateProjectUserDto } from 'src/project-user/project-user.dto'

export class CreateProjectDto {
  @IsString()
  @IsNotEmpty()
  name: string

  @IsString()
  @IsOptional()
  description?: string

  @IsNotEmpty()
  @Type(() => Date)
  @IsDate()
  startDate: Date

  @IsDate()
  @Type(() => Date)
  @IsOptional()
  endDate?: Date

  @IsNotEmpty()
  @IsEnum(Status)
  status: Status

  @IsArray()
  @IsOptional()
  @ValidateNested({ each: true })
  @Type(() => CreateProjectUserDto)
  users?: CreateProjectUserDto[]

  @IsArray()
  @IsOptional()
  @IsInt({ each: true })
  tasks?: number[]

  @IsArray()
  @IsOptional()
  @IsInt({ each: true })
  reports?: number[]
}

export class UpdateProjectDto extends PartialType(CreateProjectDto) {}

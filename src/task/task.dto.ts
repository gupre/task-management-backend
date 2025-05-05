import { PartialType } from '@nestjs/mapped-types'
import { Type } from 'class-transformer'
import {
  IsArray,
  IsDate,
  IsEnum,
  IsInt,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString
} from 'class-validator'
import { Priority, Status } from 'prisma/generated/client'

export class CreateTaskDto {
  @IsInt()
  @IsNotEmpty()
  projectId: number

  @IsInt()
  @IsOptional()
  userId?: number

  @IsInt()
  @IsOptional()
  departmentId?: number

  @IsString()
  @IsNotEmpty()
  name: string

  @IsString()
  @IsOptional()
  description?: string

  @Type(() => Date)
  @IsDate()
  @IsOptional()
  assignmentDate?: Date

  @IsInt()
  @IsOptional()
  hoursSpent?: number

  @Type(() => Date)
  @IsDate()
  @IsOptional()
  dueDate?: Date

  @IsInt()
  @IsOptional()
  estimatedHours?: number

  @IsEnum(Priority)
  priority: Priority

  @IsEnum(Status)
  status: Status

  @IsInt()
  @IsOptional()
  progress?: number

  @IsArray()
  @IsOptional()
  @IsInt({ each: true })
  historyIds?: number[]

  @IsArray()
  @IsOptional()
  @IsInt({ each: true })
  reportIds?: number[]

  @IsOptional()
  @IsNumber()
  order?: number
}

export class UpdateTaskDto extends PartialType(CreateTaskDto) {}

export class UpdateTaskOrderDto {
  @IsArray()
  @IsInt({ each: true })
  taskIds: number[]
}

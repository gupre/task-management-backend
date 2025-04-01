import { PartialType } from '@nestjs/mapped-types'
import { Type } from 'class-transformer'
import {
  IsArray,
  IsDate,
  IsInt,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString
} from 'class-validator'

export class CreateReportProjectDto {
  @IsInt()
  @IsNotEmpty()
  projectId: number

  @IsOptional()
  @IsDate()
  @Type(() => Date)
  generatedDate?: Date

  @IsString()
  @IsOptional()
  content?: string

  @IsString()
  @IsOptional()
  performanceAnalysis?: string

  @IsInt()
  @IsOptional()
  completedTasks?: number

  @IsNumber()
  @IsOptional()
  averageTimePerTask?: number

  @IsString()
  @IsOptional()
  completionRate?: string

  @IsString()
  @IsOptional()
  teamEfficiency?: string

  @IsInt()
  @IsOptional()
  totalTasks?: number

  @IsOptional()
  @IsArray()
  @IsInt({ each: true })
  reports?: number[]
}

export class UpdateReportProjectDto extends PartialType(
  CreateReportProjectDto
) {
  @IsOptional()
  @IsArray()
  @IsInt({ each: true })
  addReports?: number[]

  @IsOptional()
  @IsArray()
  @IsInt({ each: true })
  removeReports?: number[]
}

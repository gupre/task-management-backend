import { Type } from 'class-transformer'
import {
  IsDate,
  IsInt,
  IsNotEmpty,
  IsOptional,
  IsString
} from 'class-validator'

export class ReportTaskDto {
  @IsInt()
  @IsNotEmpty()
  taskId: number

  @IsInt()
  @IsNotEmpty()
  reportProjectId: number

  @IsOptional()
  @Type(() => Date)
  @IsDate()
  generatedDate?: Date

  @IsString()
  @IsOptional()
  content?: string

  @IsString()
  @IsOptional()
  performanceAnalysis?: string
}

// export class UpdateReportTaskDto extends PartialType(CreateReportTaskDto) {}

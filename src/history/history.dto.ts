import {
  IsInt,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString
} from 'class-validator'

export class HistoryDto {
  @IsInt()
  @IsNotEmpty()
  taskId: number

  @IsInt()
  @IsOptional()
  userId?: number

  @IsInt()
  @IsOptional()
  departmentId?: number

  @IsString()
  @IsOptional()
  comment?: string

  @IsString()
  @IsOptional()
  createdAt?: string

  @IsInt()
  @IsOptional()
  createdByUserId?: number

  @IsInt()
  @IsOptional()
  createdByDepartmentId?: number

  @IsNumber()
  @IsOptional()
  hoursSpent?: number
}

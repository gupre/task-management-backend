import { IsInt, IsNotEmpty, IsOptional, IsString } from 'class-validator'

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
}

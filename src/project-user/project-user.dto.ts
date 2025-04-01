import { PartialType } from '@nestjs/mapped-types'
import { Type } from 'class-transformer'
import { IsInt, IsNotEmpty } from 'class-validator'

export class CreateProjectUserDto {
  @IsNotEmpty()
  @Type(() => Number)
  @IsInt()
  projectId: number

  @IsNotEmpty()
  @Type(() => Number)
  @IsInt()
  userId: number
}

export class UpdateProjectUserDto extends PartialType(CreateProjectUserDto) {}

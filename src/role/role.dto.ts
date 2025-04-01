import { PartialType } from '@nestjs/mapped-types'
import { IsArray, IsInt, IsOptional, IsString } from 'class-validator'

export class CreateRoleDto {
  @IsString()
  name: string

  @IsOptional()
  @IsArray()
  @IsInt({ each: true })
  usersIds?: number[]

  @IsOptional()
  @IsArray()
  @IsInt({ each: true })
  permissionsIds?: number[]
}

export class UpdateRoleDto extends PartialType(CreateRoleDto) {}

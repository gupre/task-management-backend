import { PartialType } from '@nestjs/mapped-types'
import { IsArray, IsInt, IsOptional, IsString } from 'class-validator'

export class CreatePermissionsDto {
  @IsString()
  name: string

  @IsArray()
  @IsOptional()
  @IsInt({ each: true })
  rolesIds?: number[]
}

export class UpdatePermissionsDto extends PartialType(CreatePermissionsDto) {}

import { IsInt, IsNotEmpty } from 'class-validator'

export class CreateRolePermissionsDto {
  @IsInt()
  @IsNotEmpty()
  permissionsId: number

  @IsInt()
  @IsNotEmpty()
  roleId: number
}

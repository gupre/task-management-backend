import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common'
import { Reflector } from '@nestjs/core'
import { ROLES_KEY } from '../decorator/roles.decorator'

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private reflector: Reflector) {}

  canActivate(context: ExecutionContext): boolean {
    console.log('RolesGuard called')

    const requiredRoles = this.reflector.get<string[]>(
      ROLES_KEY,
      context.getHandler()
    )
    if (!requiredRoles) return true

    const { user } = context.switchToHttp().getRequest()

    console.log(user)
    console.log(user.roleId)

    const roleIds = {
      admin: 1
    }
    const userRoleId = user.roleId

    return requiredRoles.some(role => roleIds[role] === userRoleId)
  }
}

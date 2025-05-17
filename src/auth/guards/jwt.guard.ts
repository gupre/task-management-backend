import {
  ExecutionContext,
  Injectable,
  UnauthorizedException
} from '@nestjs/common'
import { AuthGuard } from '@nestjs/passport'

// export class JwtAuthGuard extends AuthGuard('jwt') {}
@Injectable()
export class JwtAuthGuard extends AuthGuard('jwt') {
  canActivate(context: ExecutionContext) {
    // console.log('JwtAuthGuard called')
    return super.canActivate(context)
  }

  handleRequest(err, user, info, context) {
    // console.log('handleRequest user:', user)
    if (err || !user) throw err || new UnauthorizedException()
    return user
  }
}

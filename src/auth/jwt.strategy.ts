import { Injectable, UnauthorizedException } from '@nestjs/common'
import { ConfigService } from '@nestjs/config'
import { PassportStrategy } from '@nestjs/passport'
import { ExtractJwt, Strategy } from 'passport-jwt'
import { UserService } from '../user/user.service'

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(
    private configService: ConfigService,
    private userService: UserService
  ) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: true,
      secretOrKey: configService.get('JWT_SECRET') as string
    })
  }

  async validate({ id }: { id: number }) {
    // return this.userService.getById(+id)
    const user = await this.userService.getById(+id)
    if (!user) {
      throw new UnauthorizedException('User not found')
    }
    // Убедитесь, что roleId передается вместе с user
    return { ...user, roleId: user.roleId } // добавляем roleId
  }
}

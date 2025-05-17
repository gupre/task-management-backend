import { Module, forwardRef } from '@nestjs/common'
import { PrismaService } from 'src/prisma.service'
import { TaskModule } from 'src/task/task.module'
import { UserController } from './user.controller'
import { UserService } from './user.service'

@Module({
  imports: [forwardRef(() => TaskModule)],
  controllers: [UserController],
  providers: [UserService, PrismaService],
  exports: [UserService]
})
export class UserModule {}

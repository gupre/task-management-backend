import { forwardRef, Module } from '@nestjs/common'
import { PrismaService } from 'src/prisma.service'
import { TaskModule } from 'src/task/task.module'
import { UserService } from 'src/user/user.service'
import { HistoryController } from './history.controller'
import { HistoryService } from './history.service'

@Module({
  imports: [forwardRef(() => TaskModule)],
  controllers: [HistoryController],
  providers: [HistoryService, PrismaService, HistoryService, UserService],
  exports: [HistoryService]
})
export class HistoryModule {}

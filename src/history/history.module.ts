import { Module } from '@nestjs/common'
import { PrismaService } from 'src/prisma.service'
import { UserService } from 'src/user/user.service'
import { HistoryController } from './history.controller'
import { HistoryService } from './history.service'

@Module({
  controllers: [HistoryController],
  providers: [HistoryService, PrismaService, HistoryService, UserService],
  exports: [HistoryService]
})
export class HistoryModule {}

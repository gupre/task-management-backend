import { Module } from '@nestjs/common'
import { EmailService } from 'src/email/email.service'
import { PrismaService } from 'src/prisma.service'
import { NotificationController } from './notification.controller'
import { NotificationService } from './notification.service'

@Module({
  controllers: [NotificationController],
  providers: [EmailService, NotificationService, PrismaService],
  exports: [NotificationService]
})
export class NotificationModule {}

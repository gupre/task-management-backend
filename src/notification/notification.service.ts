import { Injectable } from '@nestjs/common'
import { PrismaService } from 'src/prisma.service'

@Injectable()
export class NotificationService {
  constructor(
    private readonly prisma: PrismaService
    // private readonly emailService: EmailService
  ) {}

  async notifyUser(
    userId: number,
    subject: string,
    message: string,
    type?: 'email' | 'web' | 'push'
  ) {
    return await this.prisma.notification.create({
      data: {
        userId,
        type,
        subject,
        message
      }
    })
  }

  async getUserNotifications(userId: number) {
    return this.prisma.notification.findMany({
      where: { userId },
      orderBy: { createdAt: 'desc' }
    })
  }

  async markAsRead(notificationId: number) {
    return this.prisma.notification.update({
      where: { id: notificationId },
      data: { isRead: true }
    })
  }

  // async notifyUserByEmail(
  //   userId: number,
  //   email: string,
  //   subject: string,
  //   message: string,
  //   sendEmail = false
  // ) {
  //   // 1. Отправка email
  //   await this.emailService.sendEmail(email, subject, message)

  //   // 2. Логирование в БД
  //   await this.prisma.notification.create({
  //     data: {
  //       userId,
  //       type: 'email',
  //       subject,
  //       message
  //     }
  //   })
  // }
}

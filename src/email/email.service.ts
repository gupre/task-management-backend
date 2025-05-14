import { Injectable } from '@nestjs/common'
import * as nodemailer from 'nodemailer'

@Injectable()
export class EmailService {
  private transporter = nodemailer.createTransport({
    service: 'gmail', // или smtp.yandex, если используешь Яндекс
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS
    }
  })

  async sendEmail(to: string, subject: string, text: string) {
    await this.transporter.sendMail({
      from: `"Task Manager" <${process.env.EMAIL_USER}>`,
      to,
      subject,
      text
    })
  }
}

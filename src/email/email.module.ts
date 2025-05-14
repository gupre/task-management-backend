import { Module } from '@nestjs/common'
import { PrismaService } from 'src/prisma.service'
// import { emailController } from './email.controller'
import { EmailService } from './email.service'

@Module({
  // controllers: [emailController],
  providers: [EmailService, PrismaService],
  exports: [EmailService]
})
export class EmailModule {}

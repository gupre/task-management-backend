import { Module } from '@nestjs/common'
import { PrismaService } from 'src/prisma.service'
import { departmentController } from './department.controller'
import { departmentService } from './department.service'

@Module({
  controllers: [departmentController],
  providers: [departmentService, PrismaService],
  exports: [departmentService]
})
export class departmentModule {}

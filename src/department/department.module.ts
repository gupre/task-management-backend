import { Module } from '@nestjs/common'
import { PrismaService } from 'src/prisma.service'
import { DepartmentController } from './department.controller'
import { DepartmentService } from './department.service'

@Module({
  controllers: [DepartmentController],
  providers: [DepartmentService, PrismaService],
  exports: [DepartmentService]
})
export class DepartmentModule {}

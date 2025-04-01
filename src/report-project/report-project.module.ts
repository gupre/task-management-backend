import { Module } from '@nestjs/common'
import { PrismaService } from 'src/prisma.service'
import { ReportProjectController } from './report-project.controller'
import { ReportProjectService } from './report-project.service'

@Module({
  controllers: [ReportProjectController],
  providers: [ReportProjectService, PrismaService],
  exports: [ReportProjectService]
})
export class ReportProjectModule {}

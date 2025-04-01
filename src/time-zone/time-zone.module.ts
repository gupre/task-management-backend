import { Module } from '@nestjs/common'
import { PrismaService } from 'src/prisma.service'
import { TimeZoneController } from './time-zone.controller'
import { TimeZoneService } from './time-zone.service'

@Module({
  controllers: [TimeZoneController],
  providers: [TimeZoneService, PrismaService],
  exports: [TimeZoneService]
})
export class TimeZoneModule {}

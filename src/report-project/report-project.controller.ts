import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  Query,
  UsePipes,
  ValidationPipe
} from '@nestjs/common'
import { Auth } from 'src/auth/decorators/auth.decorator'
import {
  CreateReportProjectDto,
  UpdateReportProjectDto
} from './report-project.dto'
import { ReportProjectService } from './report-project.service'

@Controller('report-project')
export class ReportProjectController {
  constructor(private readonly reportProjectService: ReportProjectService) {}

  @UsePipes(new ValidationPipe())
  @HttpCode(200)
  @Auth()
  @Post()
  async create(@Body() createReportProjectDto: CreateReportProjectDto) {
    return this.reportProjectService.create(createReportProjectDto)
  }

  @Auth()
  @Get()
  async findAll() {
    return this.reportProjectService.findAll()
  }

  @Auth()
  @Get(':id')
  async findId(@Param('id', ParseIntPipe) id: number) {
    return this.reportProjectService.getById(+id)
  }

  @Auth()
  @Get('project/:projectId')
  async findByProjectId(
    @Param('projectId', ParseIntPipe) projectId: number,
    @Query('startDate') startDate?: string, // Получаем startDate из query-параметров
    @Query('endDate') endDate?: string // Получаем endDate из query-параметров
  ) {
    return this.reportProjectService.getReportsByProjectId(
      +projectId,
      startDate,
      endDate
    )
  }

  @UsePipes(new ValidationPipe())
  @Auth()
  @Get('project/:projectId/tasks-for-gantt')
  async getTasksForGantt(@Param('projectId', ParseIntPipe) projectId: number) {
    // console.log('Received request for projectId:', projectId)
    return this.reportProjectService.getTasksForGantt(+projectId)
  }

  @Auth()
  @Get('project/:projectId/workload')
  async getWorkloadReport(
    @Param('projectId', ParseIntPipe) projectId: number,
    @Query('startDate') startDate?: string,
    @Query('endDate') endDate?: string
  ) {
    return this.reportProjectService.getWorkloadReport(
      +projectId,
      startDate,
      endDate
    )
  }

  @Auth()
  @Get('project/:projectId/team-report')
  async getTeamMemberReport(
    @Param('projectId', ParseIntPipe) projectId: number
  ) {
    return this.reportProjectService.getTeamMemberReport(+projectId)
  }

  @UsePipes(new ValidationPipe())
  @HttpCode(200)
  @Auth()
  @Patch(':id')
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateReportProjectDto: UpdateReportProjectDto
  ) {
    return this.reportProjectService.update(+id, updateReportProjectDto)
  }

  @UsePipes(new ValidationPipe())
  @HttpCode(200)
  @Auth()
  @Delete(':id')
  async remove(@Param('id', ParseIntPipe) id: number) {
    return this.reportProjectService.remove(+id)
  }
}

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
  UsePipes,
  ValidationPipe
} from '@nestjs/common'
import { Auth } from 'src/auth/decorators/auth.decorator'
import { ReportTaskDto } from './report-task.dto'
import { ReportTaskService } from './report-task.service'

@Controller('report-task')
export class ReportTaskController {
  constructor(private readonly reportTaskService: ReportTaskService) {}

  @UsePipes(new ValidationPipe())
  @HttpCode(200)
  @Auth()
  @Post()
  async create(@Body() createReportTaskDto: ReportTaskDto) {
    return this.reportTaskService.create(createReportTaskDto)
  }

  @Auth()
  @Get()
  async findAll() {
    return this.reportTaskService.findAll()
  }

  @Auth()
  @Get(':id')
  async findById(@Param('id', ParseIntPipe) id: number) {
    return this.reportTaskService.getById(+id)
  }

  @Auth()
  @Get('task/:taskId')
  async getReportsByTask(@Param('taskId') taskId: number) {
    return this.reportTaskService.getById(+taskId)
  }

  @UsePipes(new ValidationPipe())
  @HttpCode(200)
  @Auth()
  @Patch(':id')
  async update(
    @Param('id') id: number,
    @Body() updateReportTaskDto: ReportTaskDto
  ) {
    return this.reportTaskService.update(+id, updateReportTaskDto)
  }

  @UsePipes(new ValidationPipe())
  @HttpCode(200)
  @Auth()
  @Delete(':id')
  async remove(@Param('id') id: number) {
    return this.reportTaskService.remove(+id)
  }
}

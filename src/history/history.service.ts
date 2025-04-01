import { Injectable, NotFoundException } from '@nestjs/common'
import { PrismaService } from 'src/prisma.service'
import { HistoryDto } from './history.dto'

@Injectable()
export class HistoryService {
  constructor(private prisma: PrismaService) {}

  // Создание записей истории
  async create(dto: HistoryDto) {
    return this.prisma.history.create({
      data: dto
    })
  }

  // Получение истории по ID задачи
  async getByTaskId(taskId: number) {
    return this.prisma.history.findMany({
      where: { taskId },
      include: {
        user: true,
        department: true
      }
    })
  }

  // Обновление комментария в истории
  async update(historyId: number, updateHistoryDto: HistoryDto) {
    return this.prisma.history.update({
      where: { historyId: historyId },
      data: updateHistoryDto
    })
  }

  // Удаление записи истории
  async remove(historyId: number) {
    const history = await this.prisma.history.findUnique({
      where: { historyId }
    })
    if (!history) {
      throw new NotFoundException('History record not found')
    }

    return this.prisma.history.delete({
      where: { historyId }
    })
  }
}

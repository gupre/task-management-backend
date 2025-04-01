import { PrismaClient } from '../../prisma/generated/client'

const prisma = new PrismaClient()

async function main() {
  const timeZones = [
    { name: 'UTC', offset: 0 },
    { name: 'Europe/Moscow', offset: 3 },
    { name: 'America/New_York', offset: -5 },
    { name: 'Asia/Tokyo', offset: 9 },
    { name: 'Australia/Sydney', offset: 11 }
  ]

  for (const tz of timeZones) {
    await prisma.timeZone.upsert({
      where: { name: tz.name },
      update: {},
      create: tz
    })
  }

  console.log('Time zones seeded.')
}

main()
  .catch(e => console.error(e))
  .finally(async () => {
    prisma.$disconnect()
  })

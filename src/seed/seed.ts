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

  // Сеем часовые пояса
  for (const tz of timeZones) {
    await prisma.timeZone.upsert({
      where: { name: tz.name },
      update: {},
      create: tz
    })
  }

  console.log('Time zones seeded.')

  // Сеем департамент "Администратор"
  await prisma.department.upsert({
    where: { departmentId: 1 }, // Здесь предполагается, что департамент "Администратор" будет иметь ID = 1
    update: {}, // Если департамент уже существует, ничего не обновляем
    create: {
      departmentId: 1, // Указываем ID департамента (его можно опустить, если Prisma генерирует его автоматически)
      name: 'Администратор' // Название департамента
    }
  })

  console.log('Department "Администратор" seeded.')

  // Сеем роли "Пользователь" и "Администратор"
  await prisma.role.upsert({
    where: { roleId: 1 }, // Предполагаем, что роль "Администратор" будет иметь ID = 1
    update: {},
    create: {
      roleId: 1, // ID роли
      name: 'Администратор' // Название роли
    }
  })

  await prisma.role.upsert({
    where: { roleId: 2 }, // Роль "Пользователь" будет иметь ID = 2
    update: {},
    create: {
      roleId: 2, // ID роли
      name: 'Пользователь' // Название роли
    }
  })

  console.log('Roles "Администратор" and "Пользователь" seeded.')
}

main()
  .catch(e => console.error(e))
  .finally(async () => {
    await prisma.$disconnect()
  })

import { NestFactory } from '@nestjs/core'
// import * as cookieParser from 'cookie-parser'
import { ValidationPipe } from '@nestjs/common'
import cookieParser from 'cookie-parser'
import { AppModule } from './app.module'

async function bootstrap() {
  const app = await NestFactory.create(AppModule)

  app.setGlobalPrefix('api')
  app.useGlobalPipes(
    new ValidationPipe({
      transform: true, // важно! Это поможет правильно преобразовать типы данных
      whitelist: true,
      forbidNonWhitelisted: true
    })
  )
  app.use(cookieParser())
  app.enableCors({
    origin: ['http://localhost:3000'],
    methods: 'GET, POST, PUT, DELETE, PATCH',
    credentials: true,
    exposedHeaders: 'set-cookie'
  })

  await app.listen(process.env.PORT ?? 4200)
}
bootstrap()

import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { ConfigService } from '@nestjs/config';
import cookieParser from 'cookie-parser';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.use(cookieParser());

  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
      transformOptions: {
        enableImplicitConversion: false,
      },
    }),
  );

  const swaggerConfig = new DocumentBuilder()
    .setTitle('퍼스널 브랜딩 API')
    .setDescription('웹사이트에서 제공하는 모든 백엔드 API 명세입니다.')
    .setVersion('1.0.0')
    .build();

  const document = SwaggerModule.createDocument(app, swaggerConfig);
  SwaggerModule.setup('docs', app, document, {
    swaggerOptions: {
      persistAuthorization: true,
      displayRequestDuration: true,
    },
  });

  const configService = app.get(ConfigService);
  const adminDomain = configService.get<string>('ADMIN_DOMAIN');
  const clientDomain = configService.get<string>('CLIENT_DOMAIN');

  app.enableCors({
    origin: [
      'http://localhost:3000',
      'http://localhost:5173',
      ...(clientDomain ? [clientDomain] : []),
      ...(adminDomain ? [adminDomain] : []),
    ],
    credentials: true,
  });

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();

import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.setGlobalPrefix('');
  app.enableCors();
  const config = new DocumentBuilder()
    .setTitle('Invoice App')
    .setDescription('API description for my invoice app')
    .setVersion('0.0.1')
    .addTag('Invoices')
    .build();

  const document = SwaggerModule.createDocument(app, config);

  SwaggerModule.setup('api', app, document);

  await app.listen(8000);
}
bootstrap();

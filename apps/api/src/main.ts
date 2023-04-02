import { Logger, ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import {
  FastifyAdapter,
  NestFastifyApplication,
} from '@nestjs/platform-fastify';

import { AppModule } from './app/app.module';
import { ConfigurationService } from './app/config/config.service';
import { IConfig } from './app/config/config.model';

async function bootstrap() {
  const app = await NestFactory.create<NestFastifyApplication>(
    AppModule,
    new FastifyAdapter({ logger: true })
  );

  const configService = app.get(ConfigurationService);
  const { prefix, port } = configService.get('http', {
    infer: true,
  }) as IConfig['http'];

  app.useGlobalPipes(new ValidationPipe());
  app.setGlobalPrefix(prefix);

  await app.listen(port);

  Logger.log(
    `🚀 Application is running on: http://localhost:${port}/${prefix}`
  );
}

bootstrap();

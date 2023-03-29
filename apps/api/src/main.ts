import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';

import { AppModule } from './app/app.module';
import { ConfigurationService } from './app/config/config.service';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const config = app.get(ConfigurationService);
  const { prefix, port } = config.get('http', { infer: true });

  app.setGlobalPrefix(prefix);
  await app.listen(port);
  Logger.log(
    `🚀 Application is running on: http://localhost:${port}/${prefix}`
  );
}

bootstrap();

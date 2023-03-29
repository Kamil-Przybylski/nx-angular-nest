import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';

import { NestDatabaseModule } from '@nx-angular-nest/nest-database';
import { ConfigModule } from '@nestjs/config';
import configSchema from './config/config.schema';
import { ConfigPath, configuration } from '@nx-angular-nest/configuration';
import { ConfigurationService } from './config/config.service';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [configuration(configSchema, ConfigPath.API)],
      isGlobal: true,
      ignoreEnvFile: true,
    }),

    NestDatabaseModule,
  ],
  controllers: [AppController],
  providers: [AppService, ConfigurationService],
})
export class AppModule {}

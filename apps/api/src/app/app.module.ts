import { Module } from '@nestjs/common';

import { NestDatabaseModule } from '@libs/nest-database';
import { ConfigModule } from '@nestjs/config';
import configSchema from './config/config.schema';
import { ConfigPath, configuration } from '@libs/configuration';
import { ConfigurationService } from './config/config.service';
import { AuthModule } from '@libs/nest-auth';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [configuration(configSchema, ConfigPath.API)],
      isGlobal: true,
      ignoreEnvFile: true,
    }),

    NestDatabaseModule,
    AuthModule,
  ],
  providers: [ConfigurationService],
})
export class AppModule {}

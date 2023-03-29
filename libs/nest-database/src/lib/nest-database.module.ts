import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigurationService } from './config/config.service';
import { ConfigPath, configuration } from '@nx-angular-nest/configuration';
import configSchema from './config/config.schema';

@Module({
  imports: [
    ConfigModule.forFeature(configuration(configSchema, ConfigPath.DATABASE)),
    TypeOrmModule.forRootAsync({
      useFactory: (configService: ConfigurationService) => {
        const config = configService.get('db', { infer: true });
        return {
          type: 'postgres',
          host: config.host,
          port: config.port,
          username: config.username,
          password: config.password,
          database: config.database,
          synchronize: config.synchronize,
          entities: [],
        };
      },
      extraProviders: [ConfigurationService],
      inject: [ConfigurationService],
    }),
  ],
})
export class NestDatabaseModule {}

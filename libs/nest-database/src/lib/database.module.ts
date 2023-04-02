import { Module } from '@nestjs/common';
import { TypeOrmModule, TypeOrmModuleOptions } from '@nestjs/typeorm';
import { CollectionsModule } from './collections/collections.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import configSchema from './config/config.schema';
import { ConfigPath, configuration } from '@libs/configuration';
import { IConfig } from './config/config.model';

@Module({
  imports: [
    ConfigModule.forFeature(configuration(configSchema, ConfigPath.DATABASE)),
    TypeOrmModule.forRootAsync({
      useFactory: (configService: ConfigService<IConfig>) => {
        const config = configService.get('db', { infer: true });
        return {
          type: config?.type,
          host: config?.host,
          port: config?.port,
          username: config?.username,
          password: config?.password,
          database: config?.database,
          synchronize: config?.synchronize,
          autoLoadEntities: true,
        } as TypeOrmModuleOptions;
      },
      inject: [ConfigService],
    }),
    CollectionsModule,
  ],
  exports: [CollectionsModule],
})
export class NestDatabaseModule {}

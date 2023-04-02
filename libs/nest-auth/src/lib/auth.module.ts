import { Module } from '@nestjs/common';
import { NestDatabaseModule } from '@libs/nest-database';
import { AuthService } from './auth/auth.service';
import { AuthController } from './auth/auth.controller';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { ConfigPath, configuration } from '@libs/configuration';
import configSchema from './config/config.schema';
import { JwtModule } from '@nestjs/jwt';
import { IConfig } from './config/config.model';
import { JwtStrategy } from './jwt/jwt.strategy';
import { PassportModule } from '@nestjs/passport';

@Module({
  imports: [
    JwtModule.registerAsync({
      useFactory: (configService: ConfigService<IConfig>) => {
        const config = configService.get('jwt', { infer: true });
        return {
          secret: config?.secret,
          signOptions: { expiresIn: config?.expiresIn },
        };
      },
      inject: [ConfigService],
    }),
    ConfigModule.forFeature(configuration(configSchema, ConfigPath.AUTH)),
    PassportModule.register({ defaultStrategy: 'jwt' }),
    NestDatabaseModule,
  ],
  providers: [AuthService, JwtStrategy],
  controllers: [AuthController],
})
export class AuthModule {}

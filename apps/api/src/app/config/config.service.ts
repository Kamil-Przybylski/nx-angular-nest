import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { IConfig } from './config.model';

@Injectable()
export class ConfigurationService extends ConfigService<IConfig> {}

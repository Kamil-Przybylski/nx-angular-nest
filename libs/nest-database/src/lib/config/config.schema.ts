import * as Joi from 'joi';
import { IConfig } from './config.model';

export default Joi.object<IConfig>({
  env: Joi.string().default('development'),
  db: Joi.object<IConfig['db']>({
    type: Joi.string().default('postgres'),
    host: Joi.string().default('localhost'),
    port: Joi.number().default(5432),
    username: Joi.string().allow(''),
    password: Joi.string().allow(''),
    database: Joi.string().required(),
    synchronize: Joi.boolean().required(),
  }),
});

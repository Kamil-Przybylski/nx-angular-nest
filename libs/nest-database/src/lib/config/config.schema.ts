import * as Joi from 'joi';
import { IConfig } from './config.model';

export default Joi.object<IConfig>({
  env: Joi.string().default('development'),
  db: Joi.object<IConfig['db']>({
    type: Joi.string(),
    host: Joi.string(),
    port: Joi.number(),
    username: Joi.string().allow(''),
    password: Joi.string().allow(''),
    database: Joi.string().required(),
    synchronize: Joi.boolean().required(),
  }),
});

import * as Joi from 'joi';
import { IConfig } from './config.model';

export default Joi.object<IConfig>({
  env: Joi.string().default('development'),
  http: Joi.object<IConfig['http']>({
    prefix: Joi.string().default('api'),
    port: Joi.number().required(),
  }),
});

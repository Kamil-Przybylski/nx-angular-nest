import * as Joi from 'joi';
import { IConfig } from './config.model';

export default Joi.object<IConfig>({
  env: Joi.string().default('development'),
  jwt: Joi.object<IConfig['jwt']>({
    secret: Joi.string(),
    expiresIn: Joi.string(),
  }),
});

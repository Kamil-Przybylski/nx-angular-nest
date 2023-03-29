import { readFileSync } from 'fs';
import Joi = require('joi');
import * as yaml from 'js-yaml';
import { join } from 'path';

export const enum ConfigPath {
  API = 'api',
  DATABASE = 'database',
}

export const configuration = <T>(
  validationSchema: Joi.ObjectSchema<T>,
  file: ConfigPath
) => {
  const config = yaml.load(
    readFileSync(join(__dirname, 'config', `config.${file}.yaml`), 'utf8')
  ) as Record<string, T>;
  const { value, warning, error } = validationSchema.validate(config, {
    allowUnknown: true,
  });
  if (error) throw error;
  if (warning) console.warn(warning);
  return () => value;
};

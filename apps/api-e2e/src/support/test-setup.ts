/* eslint-disable */

import axios from 'axios';
import { join, resolve } from 'path';
import * as yaml from 'js-yaml';
import { readFileSync } from 'fs';

module.exports = async function () {
  const path = join(resolve('config'), `config.api.yaml`);
  const { http } = yaml.load(readFileSync(path, 'utf8')) as any;

  // Configure axios for tests to use.
  const host = http.host ?? 'localhost';
  const port = http.port;
  const prefix = http.prefix;
  const baseURL = `http://${host}:${port}/${prefix}`;

  axios.defaults.baseURL = baseURL;
};

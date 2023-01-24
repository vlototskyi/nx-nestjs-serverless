import type { AWS } from '@serverless/typescript';
import { baseServerlessConfig } from '../../serverless.base';

const serverlessConfig: AWS = {
  service: 'serverless',
  ...baseServerlessConfig
};

module.exports = serverlessConfig;

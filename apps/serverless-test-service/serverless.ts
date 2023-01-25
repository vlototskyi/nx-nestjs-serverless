import type { AWS } from '@serverless/typescript';
import { baseServerlessConfig } from '../../serverless.base';

const serverlessConfig: AWS = {
  ...baseServerlessConfig,
  service: 'serverless-test-service',
  functions: {
    main: {
      handler: 'dist/main.handler',
      events: [{
        http: {
          method: "ANY",
          path: "/"
        }
      }, {
        http: {
          method: "ANY",
          path: '{proxy+}'
        }
      }]
    }
  }
};

module.exports = serverlessConfig;

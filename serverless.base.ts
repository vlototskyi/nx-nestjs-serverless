import { AWS } from '@serverless/typescript';

export const baseServerlessConfigProvider: AWS['provider'] = {
  name: 'aws',
  runtime: 'nodejs16.x',
  deploymentMethod: 'direct',
  memorySize: 128
};

export const baseServerlessConfig: AWS = {
  service: 'base',
  useDotenv: true,
  package: {
    individually: true,
    excludeDevDependencies: false,
    patterns: ['!./**', 'dist/**/*']
  },
  plugins: [
    'serverless-plugin-common-excludes',
    'serverless-plugin-include-dependencies',
    'serverless-offline',
  ],
  provider: {
    ...baseServerlessConfigProvider,
    apiGateway: {
      minimumCompressionSize: 1024,
      restApiId: {
        'Fn::ImportValue': `dev-AppApiGW-restApiId`,
      },
      restApiRootResourceId: {
        'Fn::ImportValue': `dev-AppApiGW-rootResourceId`,
      },
    },
  }
};

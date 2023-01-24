import { AWS } from '@serverless/typescript';

export const baseServerlessConfig: AWS = {
  service: 'base',
  useDotenv: true,
  package: {
    individually: true,
    excludeDevDependencies: true,
  },
  plugins: [
    'serverless-plugin-typescript',
    'serverless-plugin-optimize',
    'serverless-offline',
  ],
  custom: {
    serverlessPluginTypescript : {
      tsConfigFileLocation: './tsconfig.app.json'
    }
  },
  provider: {
    name: 'aws',
    runtime: 'nodejs16.x',
    memorySize: 128,
    // apiGateway: {
    //   minimumCompressionSize: 1024,
    //   // @ts-ignore
    //   restApiId: {
    //     'Fn::ImportValue': `${env.name}-AppApiGW-restApiId`,
    //   },
    //   // @ts-ignore
    //   restApiRootResourceId: {
    //     'Fn::ImportValue': `${env.name}-AppApiGW-rootResourceId`,
    //   },
    // },
  },
  functions: {
    main: {
      handler: 'src/main.handler',
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

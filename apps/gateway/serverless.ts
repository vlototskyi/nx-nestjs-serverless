import { AWS } from '@serverless/typescript';
import { baseServerlessConfigProvider } from '../../serverless.base';

const serverlessConfig: AWS = {
  provider: baseServerlessConfigProvider,
  service: 'gateway',
  resources: {
    Resources: {
      AppApiGW: {
        Type: 'AWS::ApiGateway::RestApi',
        Properties: {
          Name: `dev-AppApiGW`,
        },
      },
    },
    Outputs: {
      ApiGatewayRestApiId: {
        Value: {
          Ref: 'AppApiGW',
        },
        Export: {
          Name: `dev-AppApiGW-restApiId`,
        },
      },
      ApiGatewayRestApiRootResourceId: {
        Value: {
          'Fn::GetAtt': ['AppApiGW', 'RootResourceId'],
        },
        Export: {
          Name: `dev-AppApiGW-rootResourceId`,
        },
      },
    },
  }
};

module.exports = serverlessConfig;

import type { AWS } from "@serverless/typescript";

import hello from "@functions/hello";
import catalogBatchProcess from "@functions/catalogBatchProcess";
import getAllProducts from "@functions/getAllProducts";
import getProductById from "@functions/getProductById";
import getWeather from "@functions/getWeather";
import postProduct from "@functions/postProduct";

const serverlessConfiguration: AWS = {
  service: "product-service",
  frameworkVersion: "2",
  useDotenv: true,
  configValidationMode: "error",
  custom: {
    webpack: {
      webpackConfig: "./webpack.config.js",
      includeModules: true,
    },
  },
  plugins: ["serverless-webpack", "serverless-offline"],
  provider: {
    name: "aws",
    runtime: "nodejs14.x",
    region: "eu-west-1",
    stage: "dev",
    iamRoleStatements: [
      {
        Effect: "Allow",
        Action: "sns:*",
        Resource: [{ Ref: "createProductTopic" }],
      },
      {
        Effect: "Allow",
        Action: "sqs:*",
        Resource: {
          "Fn::GetAtt": ["catalogItemsQueue", "Arn"],
        },
      },
    ],
    apiGateway: {
      minimumCompressionSize: 1024,
      shouldStartNameWithService: true,
    },
    environment: {
      AWS_NODEJS_CONNECTION_REUSE_ENABLED: "1",
      WEATHERSTACK_API_KEY: "${env:WEATHERSTACK_API_KEY}",
      PG_HOST: "${env:PG_HOST}",
      PG_PORT: "${env:PG_PORT}",
      PG_DATABASE: "${env:PG_DATABASE}",
      PG_USERNAME: "${env:PG_USERNAME}",
      PG_PASSWORD: "${env:PG_PASSWORD}",
      FIRST_EMAIL: "${env:FIRST_EMAIL}",
      SECOND_EMAIL: "${env:SECOND_EMAIL}",
      SQS_URL: {
        Ref: "catalogItemsQueue",
      },
      SNS_ARN: {
        Ref: "createProductTopic",
      },
    },
    lambdaHashingVersion: "20201221",
  },
  resources: {
    Resources: {
      catalogItemsQueue: {
        Type: "AWS::SQS::Queue",
        Properties: {
          QueueName: "catalogItemsQueue",
        },
      },
      createProductTopic: {
        Type: "AWS::SNS::Topic",
        Properties: {
          TopicName: "sqs-create-topic",
        },
      },
      createProductSubscription: {
        Type: "AWS::SNS::Subscription",
        Properties: {
          Endpoint: "${env:FIRST_EMAIL}",
          Protocol: "email",
          TopicArn: {
            Ref: "createProductTopic",
          }
        },
      },
      createExpensiveProductSubscription: {
        Type: "AWS::SNS::Subscription",
        Properties: {
          Endpoint: "${env:SECOND_EMAIL}",
          Protocol: "email",
          TopicArn: {
            Ref: "createProductTopic",
          },
          FilterPolicy: {
            price: [
              {
                numeric: [">", 5],
              },
            ],
          },
        },
      },
    },
    Outputs: {
      catalogItemsQueue: {
        Value: {
          Ref: "catalogItemsQueue",
        },
        Export: {
          Name: "catalogItemsQueue",
        },
      },
      catalogItemsQueueArn: {
        Value: {
          "Fn::GetAtt": ["catalogItemsQueue", "Arn"],
        },
        Export: {
          Name: "catalogItemsQueueArn",
        },
      },
    },
  },
  // import the function via paths
  functions: {
    hello,
    catalogBatchProcess,
    getAllProducts,
    getProductById,
    getWeather,
    postProduct,
  },
};

module.exports = serverlessConfiguration;

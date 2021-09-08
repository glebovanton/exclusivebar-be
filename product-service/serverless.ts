import type { AWS } from "@serverless/typescript";

import hello from "@functions/hello";
import getAllProducts from "@functions/getAllProducts";
import getProductById from "@functions/getProductById";
import getWeather from "@functions/getWeather";
import postProduct from "@functions/postProduct";

const serverlessConfiguration: AWS = {
  service: "product-service",
  frameworkVersion: "2",
  useDotenv: true,
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
    apiGateway: {
      minimumCompressionSize: 1024,
      shouldStartNameWithService: true,
    },
    environment: {
      AWS_NODEJS_CONNECTION_REUSE_ENABLED: "1",
      WEATHERSTACK_API_KEY: "${env:WEATHERSTACK_API_KEY}",
    },
    lambdaHashingVersion: "20201221",
  },
  // import the function via paths
  functions: { hello, getAllProducts, getProductById, getWeather, postProduct },
};

module.exports = serverlessConfiguration;

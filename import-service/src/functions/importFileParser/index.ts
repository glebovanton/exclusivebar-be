import { handlerPath } from "@libs/handlerResolver";

export default {
  handler: `${handlerPath(__dirname)}/handler.main`,
  events: [
    {
      s3: {
        bucket: "import-service-dev-serverlessdeploymentbucket-1qqm0b0mlj9ny",
        event: "s3:ObjectCreated:*",
        rules: [
          {
            prefix: "uploaded/"
          },
        ],
        existing: true,
      },
    },
  ],
};

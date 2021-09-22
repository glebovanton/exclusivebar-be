import "source-map-support/register";
import * as AWS from "aws-sdk";
import * as csv from "csv-parser";

import { middyfy } from "@libs/lambda";

const importFileParser = async (event) => {
  const BUCKET = "import-service";
  const s3 = new AWS.S3({ region: "eu-west-1" });

  event.Records.forEach((record) => {
    const s3Stream = s3
      .getObject({
        Bucket: BUCKET,
        Key: record.s3.object.key,
      })
      .createReadStream();
    s3Stream
      .pipe(csv())
      .on("data", (data) => {
        console.log("s3Stream data", data);
      })
      .on("end", async () => {
        console.log(`Copy from ${BUCKET}/${record.s3.object.key}`);
        const copiedKey = record.s3.object.key.replace("uploaded", "parsed");
        await s3
          .copyObject({
            Bucket: BUCKET,
            CopySource: `${BUCKET}/${record.s3.object.key}`,
            Key: copiedKey,
          })
          .promise();

        console.log(`Copied into ${copiedKey}`);
      });
  });
};

export const main = middyfy(importFileParser);

import "source-map-support/register";
import { StatusCodes } from "http-status-codes";
import type { ValidatedEventAPIGatewayProxyEvent } from "@libs/apiGateway";
import { formatJSONResponse } from "@libs/apiGateway";
import { middyfy } from "@libs/lambda";

import schema from "./schema";

const getById: ValidatedEventAPIGatewayProxyEvent<typeof schema> = async (
  event
) => {
  const { id } = event.pathParameters;
  return +id < 10
    ? formatJSONResponse({
        count: 4,
        description: `Product id-${id}. Short Product Description`,
        id: "7567ec4b-b10c-48c5-9345-fc73c48a80aa",
        price: 2.4,
        title: "[MOCK] ProductOne",
      })
    : {
        statusCode: StatusCodes.NOT_FOUND,
        body: JSON.stringify("Product not found"),
        headers: {
          "Access-Control-Allow-Credentials": true,
          "Access-Control-Allow-Methods": "*",
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "application/json",
        },
      };
};

export const main = middyfy(getById);

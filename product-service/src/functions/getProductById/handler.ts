import "source-map-support/register";
import { StatusCodes } from "http-status-codes";
import { formatJSONResponse } from "../../libs/apiGateway";
import { middyfy } from "../../libs/lambda";

import { HttpResponse } from "@functions/getWeather/handler";

import { products } from "./mocks";

export async function getById(event): HttpResponse {
  const { id } = event.pathParameters;
  const product = products.find((product) => product.id === id);
  return product
    ? formatJSONResponse(product)
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
}

export const main = middyfy(getById);

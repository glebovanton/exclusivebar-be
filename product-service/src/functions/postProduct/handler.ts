import "source-map-support/register";
import { StatusCodes } from "http-status-codes";
import { formatJSONResponse } from "../../libs/apiGateway";
import { middyfy } from "../../libs/lambda";
import { lambdaLog } from "../../helpers/log";

import { HttpResponse } from "@functions/getWeather/handler";

import { postProduct as createProduct } from "../../helpers/postProduct";

export async function postProduct(event): HttpResponse {
  lambdaLog("postProduct", event);
  if (!event?.body) {
    return {
      statusCode: StatusCodes.BAD_REQUEST,
      body: JSON.stringify("Cannot create product"),
    };
  }
  const { title, description, price, count } = event?.body;
  let product;
  if (title && description && price && count) {
    product = await createProduct(title, description, price, count);
  }
  return product?.status === StatusCodes.OK
    ? formatJSONResponse(product.message)
    : {
        statusCode: StatusCodes.BAD_REQUEST,
        body: JSON.stringify("Cannot create product"),
        headers: {
          "Access-Control-Allow-Credentials": true,
          "Access-Control-Allow-Methods": "*",
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "application/json",
        },
      };
}

export const main = middyfy(postProduct);

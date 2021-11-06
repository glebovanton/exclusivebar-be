import "source-map-support/register";
import { StatusCodes } from "http-status-codes";
import { formatJSONResponse } from "../../libs/apiGateway";
import { middyfy } from "../../libs/lambda";

import { HttpResponse } from "@functions/getWeather/handler";

import { deleteProduct as removeProduct } from "../../helpers/deleteProduct";

export async function deleteProduct(event): HttpResponse {
  if (!event?.body) {
    return {
      statusCode: StatusCodes.BAD_REQUEST,
      body: JSON.stringify("Cannot delete product"),
    };
  }
  const { id } = event.pathParameters;
  let product;
  if (id) {
    product = await removeProduct(id);
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

export const main = middyfy(deleteProduct);

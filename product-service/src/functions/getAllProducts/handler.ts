import "source-map-support/register";
import { formatJSONResponse } from "../../libs/apiGateway";
import { middyfy } from "../../libs/lambda";
import { products } from "./mocks";

import { HttpResponse } from "@functions/getWeather/handler";

export async function getAll(): HttpResponse {
  return formatJSONResponse(products);
}

export const main = middyfy(getAll);

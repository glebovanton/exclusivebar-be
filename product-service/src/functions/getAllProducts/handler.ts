import "source-map-support/register";
import { formatJSONResponse } from "../../libs/apiGateway";
import { middyfy } from "../../libs/lambda";
import { getProducts } from "../../helpers/getProducts";

import { HttpResponse } from "@functions/getWeather/handler";
import { lambdaLog } from "../../helpers/log";

export async function getAll(): HttpResponse {
  lambdaLog("getAll");
  const products = await getProducts();
  return formatJSONResponse(products);
}

export const main = middyfy(getAll);

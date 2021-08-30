import "source-map-support/register";

import type { ValidatedEventAPIGatewayProxyEvent } from "@libs/apiGateway";
import { formatJSONResponse } from "@libs/apiGateway";
import { middyfy } from "@libs/lambda";

import schema from "./schema";

const getAll: ValidatedEventAPIGatewayProxyEvent<typeof schema> = async () => {
  return formatJSONResponse([
    {
      count: 4,
      description: "[AWG] Short Product Description1",
      id: "7567ec4b-b10c-48c5-9345-fc73c48a80aa",
      price: 2.4,
      title: "[AWG] ProductOne",
    },
    {
      count: 6,
      description: "[AWG]Short Product Description3",
      id: "7567ec4b-b10c-48c5-9345-fc73c48a80a0",
      price: 10,
      title: "[AWG] ProductNew",
    },
    {
      count: 7,
      description: "[AWG] Short Product Description2",
      id: "7567ec4b-b10c-48c5-9345-fc73c48a80a2",
      price: 23,
      title: "[AWG] ProductTop",
    },
    {
      count: 12,
      description: "[AWG] Short Product Description7",
      id: "7567ec4b-b10c-48c5-9345-fc73c48a80a1",
      price: 15,
      title: "[AWG] ProductTitle",
    },
    {
      count: 7,
      description: "[AWG] Short Product Description2",
      id: "7567ec4b-b10c-48c5-9345-fc73c48a80a3",
      price: 23,
      title: "[AWG] Product",
    },
    {
      count: 8,
      description: "[AWG] Short Product Description4",
      id: "7567ec4b-b10c-48c5-9345-fc73348a80a1",
      price: 15,
      title: "[AWG] ProductTest",
    },
    {
      count: 2,
      description: "[AWG] Short Product Descriptio1",
      id: "7567ec4b-b10c-48c5-9445-fc73c48a80a2",
      price: 23,
      title: "[AWG] Product2",
    },
    {
      count: 3,
      description: "[AWG] Short Product Description7",
      id: "7567ec4b-b10c-45c5-9345-fc73c48a80a1",
      price: 15,
      title: "[AWG] ProductName",
    },
  ]);
};

export const main = middyfy(getAll);

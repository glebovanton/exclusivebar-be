import "source-map-support/register";
import { APIGatewayProxyEvent, APIGatewayProxyResult } from "aws-lambda";
import axios from "axios";
import { formatJSONResponse } from "../../libs/apiGateway";
import { middyfy } from "../../libs/lambda";

export type HttpResponse = Promise<APIGatewayProxyResult>;
export type HttpEventRequest<T = null> = Omit<
  APIGatewayProxyEvent,
  "pathParameters"
> & {
  pathParameters: T;
};
export type WeatherstackSuccessResponse = {
  request: {
    type: string;
    query: string;
    language: string;
    unit: string;
  };
  location: {
    name: string;
    country: string;
    region: string;
    lat: string;
    lon: string;
  };
  current: {
    temperature: number;
    weather_descriptions: string[];
    wind_speed: number;
    pressure: number;
  };
};

export type HttpResponseBody = {
  city: string;
  temperature: number;
  textWeather: string[];
}

export type WeatherstackErrorResponse = {
  success: false;
  error: object;
};
export type WeatherstackResponse =
  | WeatherstackSuccessResponse
  | WeatherstackErrorResponse;

const API_KEY = process.env.WEATHERSTACK_API_KEY;

export async function handler(
  event: HttpEventRequest<{ city: string }>
): HttpResponse {
  const { city } = event.pathParameters;
  const endpoint = "http://api.weatherstack.com/current";
  const { data } = await axios.get<WeatherstackResponse>(endpoint, {
    params: { access_key: API_KEY, query: city },
  });

  if ("error" in data) {
    return respondJson({ error: true }, 200);
  }

  const response: HttpResponseBody = {
    city: data.location.name,
    temperature: data.current.temperature,
    textWeather: data.current.weather_descriptions,
  };

  return respondJson(response, 200);
}

export const respondJson = async (body: object, statusCode: number) => {
  return formatJSONResponse({
    statusCode,
    body: JSON.stringify(body),
  });
};

export const main = middyfy(handler);

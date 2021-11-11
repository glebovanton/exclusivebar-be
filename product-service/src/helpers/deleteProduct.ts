import { StatusCodes } from "http-status-codes";
import { Client } from "pg";

import { dbOptions } from "./dbOptions";

enum Table {
  Products = "products",
  Stocks = "stocks",
}

export const deleteProduct = async (id) => {
  const client = new Client(dbOptions);
  try {
    await client.connect();
  } catch (err) {
    console.error("Error during db connection", err);
    client.end();
    return {
      status: StatusCodes.INTERNAL_SERVER_ERROR,
      message: "Error during db connection",
    };
  }

  let query = {
    text: `DELETE FROM ${Table.Products} p WHERE p.id = $1`,
    values: [id],
  };

  try {
    const listProducts = await client.query(query);
    return listProducts.rows;
  } catch (err) {
    return {
      status: StatusCodes.INTERNAL_SERVER_ERROR,
      message: "Error during db request",
    };
  } finally {
    client.end();
  }
};

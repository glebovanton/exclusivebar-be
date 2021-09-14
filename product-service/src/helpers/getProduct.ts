import { StatusCodes } from "http-status-codes";
import { Client } from "pg";

import { dbOptions } from "./dbOptions";

enum Table {
  Products = "products",
  Stocks = "stocks",
}

export const getProduct = async (id) => {
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
    text: ` SELECT  
                    p.id AS "id",
                    p.title AS "title",
                    p.description AS "description", 
                    p.price AS "price", 
                    s.count AS "count"  
                FROM ${Table.Products} p LEFT JOIN ${Table.Stocks} s ON p.id = s.product_id 
                WHERE p.id = $1`,
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

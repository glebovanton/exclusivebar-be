import { StatusCodes } from "http-status-codes";
import { Client } from "pg";

import { dbOptions } from "./dbOptions";

enum Table {
  Products = "products",
  Stocks = "stocks",
}

export const getProducts = async () => {
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

  try {
    let sql = `SELECT  
                        p.id AS "id",
                        p.title AS "title",
                        p.description AS "description",
                        p.price AS "price", 
                        s.count AS "count"  
                    FROM ${Table.Products} p LEFT JOIN ${Table.Stocks} s ON p.id = s.product_id`;

    const listProducts = await client.query(sql);
    return listProducts.rows;
  } catch (err) {
    console.error("Error during db request", err);
    return {
      status: StatusCodes.INTERNAL_SERVER_ERROR,
      message: "Error during db request",
    };
  } finally {
    client.end();
  }
};

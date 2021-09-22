import { importProductsFile } from "../handler";

describe("Import service importProductsFile", () => {
  test("should return signed url", async () => {
    const event = {
      queryStringParameters: {
        name: "",
      },
    };
    const result = await importProductsFile(event);
    console.log("result", result);
    expect("").toEqual("");
  });
});

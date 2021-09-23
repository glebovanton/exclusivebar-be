import { importProductsFile } from "../handler";

interface Result {
  headers?: {};
  statusCode?: number;
  body?: string;
}
const testName = 'example.csv'

describe("ImportProductsFile lambda function", () => {
  test("should return signed url", async () => {
    const event = {
      queryStringParameters: {
        name: testName,
      },
    };
    const result: Result = await importProductsFile(event);
    expect(result.body).toContain(`amazonaws.com/uploaded/${testName}`);
  });
});

import { products } from "../mocks";
import { formatJSONResponse } from "../../../libs/apiGateway";
import { getAll } from "../handler";

beforeEach(() => {
  jest.clearAllMocks();
});

describe("getAllProducts handler", () => {
  it("should respond all products", async () => {
    const actual = await getAll();
    const expected = formatJSONResponse(products);

    expect(actual).toEqual(expected);
  });
});

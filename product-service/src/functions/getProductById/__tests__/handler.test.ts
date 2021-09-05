import { products } from "../mocks";
import { formatJSONResponse } from "../../../libs/apiGateway";
import { getById } from "../handler";

beforeEach(() => {
  jest.clearAllMocks();
});

const mockProduct = products[0];
const mockEvent = {
  pathParameters: {
    id: mockProduct.id,
  },
};

describe("getProduct handler", () => {
  it("should respond current product by id", async () => {
    const actual = await getById(mockEvent);
    const expected = formatJSONResponse(mockProduct);

    expect(actual).toEqual(expected);
  });
});

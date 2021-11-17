const math = require("../math.js");

describe("math.mul()", () => {
  it("correctly multiplies 2 and 2", () => {
    const result = math.mul(2, 2);
    expect(result).toBe(4);
  });

  it("correctly multiplies 5 and 7", () => {
    const result = math.mul(5, 7);
    expect(result).toBe(35);
  });
});

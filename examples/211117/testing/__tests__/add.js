const math = require("../math.js");

describe("math.add()", () => {
  it("correctly adds 2 and 2", () => {
    const result = math.add(2, 2);
    expect(result).toBe(4);
  });

  it("correctly adds 5 and 7", () => {
    const result = math.add(5, 7);
    expect(result).toBe(12);
  });
});

const { expect } = require("@jest/globals");
const func = require("./titlecase");

// Test X: input -> output

// GROUP 1
// Test: the great fight between THE BATMAN and THE DeAngelo -> The Great Fight Between the BATMAN and the DeAngelo
test("test 1", () => {
  const output = func("the great fight between THE BATMAN and THE DeAngelo");
  expect(output).toBe("The Great Fight Between the BATMAN And the DeAngelo");
});

test("Excluded words are always lower-case, expect for when first in sentence", () => {
  const output = func("the the THE");
  expect(output).toBe("The the the");
});

// GROUP 2
// Test: the lord of the rings -> The Lord of the Rings
test("test 4", () => {
  const output = func("the lord of the rings");
  expect(output).toBe("The Lord of the Rings");
});

// GROUP 3
// Test:

// GROUP 4
// Test:
// Test:
// Test:

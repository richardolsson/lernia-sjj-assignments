import { makeWordPicker } from "./wordPicker";

describe("wordPicker", () => {
  it("returns word of correct length", () => {
    const wordPicker = makeWordPicker(["HELLO", "SCHOOL", "COOL"]);

    const result = wordPicker(5, false);
    expect(result).toEqual("HELLO");
  });

  it("returns word with unique letters", () => {
    const wordPicker = makeWordPicker(["HELLO", "CYCLE", "FALSE"]);
    expect(wordPicker(5, true)).toEqual("FALSE");
    expect(wordPicker(5, true)).toEqual("FALSE");
    expect(wordPicker(5, true)).toEqual("FALSE");
  });
});

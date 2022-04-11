import feedback from "./feedback";

describe("feedback()", () => {
  it("abc + abc => correct, correct, correct", () => {
    const result = feedback("abc", "abc");
    expect(result).toEqual([
      { letter: "a", result: "correct" },
      { letter: "b", result: "correct" },
      { letter: "c", result: "correct" },
    ]);
  });

  it("abc + xyz => incorrect, incorrect, incorrect", () => {
    const result = feedback("abc", "xyz");
    expect(result).toEqual([
      { letter: "x", result: "incorrect" },
      { letter: "y", result: "incorrect" },
      { letter: "z", result: "incorrect" },
    ]);
  });

  it("abc + cba => misplaced, correct, misplaced", () => {
    const result = feedback("abc", "cba");
    expect(result).toEqual([
      { letter: "c", result: "misplaced" },
      { letter: "b", result: "correct" },
      { letter: "a", result: "misplaced" },
    ]);
  });

  it("abc + abb => correct, correct, incorrect", () => {
    const result = feedback("abc", "abb");
    expect(result).toEqual([
      { letter: "a", result: "correct" },
      { letter: "b", result: "correct" },
      { letter: "b", result: "incorrect" },
    ]);
  });

  it("abc + cca => misplaced, incorrect, misplaced", () => {
    const result = feedback("abc", "cca");
    expect(result).toEqual([
      { letter: "c", result: "misplaced" },
      { letter: "c", result: "incorrect" },
      { letter: "a", result: "misplaced" },
    ]);
  });
});

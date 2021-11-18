import { MinimumRatingFilter } from "../src/filters";

describe("MinimumRatingFilter", () => {
  it("filters correctly", () => {
    const filter = new MinimumRatingFilter();
    /*
    const challenges = [
      {
        title: "First challenge",
        rating: 2.5,
      },
      {
        title: "Second challenge",
        rating: 3.5,
      }
    ];

    filter.setValue(3.0);
    const output = filter.apply(challenges);

    expect(output.length).toBe(1);
    expect(output[0].title).toBe("Second challenge");
    */

    filter.setValue(3.0);
    const output = filter.apply([
      { title: "First challenge", rating: 2.5 },
      { title: "Second challenge", rating: 3.5 },
    ]);
    expect(output).toEqual([
      { title: "Second challenge", rating: 3.5 },
    ]);
  });
});

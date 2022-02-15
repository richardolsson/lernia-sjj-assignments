import { test, jest } from "@jest/globals";
import { mockScreening } from "../utils/testing.js";
import getMovieScreenings from "./getMovieScreenings.js";

describe("getMovieScreenings()", () => {
  beforeEach(() => {
    jest.useFakeTimers();
    jest.setSystemTime(new Date("2022-02-15T13:40:00.000Z"));
  });

  afterEach(() => {
    jest.clearAllTimers();
  });

  test("returns only future screenings", async () => {
    const mockCms = {
      async loadMovieScreenings() {
        return {
          data: [
            mockScreening(1, "2022-02-13T13:37:00.000Z"),
            mockScreening(2, "2022-02-14T13:37:00.000Z"),
            mockScreening(3, "2022-02-15T13:37:00.000Z"),
            mockScreening(4, "2022-02-16T13:37:00.000Z"),
            mockScreening(5, "2022-02-17T13:37:00.000Z"),
            mockScreening(6, "2022-02-18T13:37:00.000Z"),
            mockScreening(7, "2022-02-19T13:37:00.000Z"),
          ],
        };
      },
    };

    const results = await getMovieScreenings(mockCms, 1);
    const now = new Date();

    expect(results.length).toBe(4);
    results.forEach((screening) => {
      const date = new Date(screening.attributes.start_time);
      expect(date.getTime()).toBeGreaterThan(now.getTime());
    });
  });
});

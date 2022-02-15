import { jest } from "@jest/globals";
import getAllScreenings from "./getAllScreenings";
import { mockScreening } from "../utils/testing.js";


describe("getAllScreenings()", () => {
  beforeEach(() => {
    jest.useFakeTimers();
    jest.setSystemTime(new Date("2022-02-15T13:40:00.000Z"));
  });

  afterEach(() => {
    jest.clearAllTimers();
  });

  test("returns at most 10 screenings", async () => {
    const mockCms = {
      async loadAllScreenings() {
        return {
          data: [
            // 11 screenings returned from API
            mockScreening(1, "2022-02-19T13:37:00.000Z"),
            mockScreening(2, "2022-02-19T13:37:00.000Z"),
            mockScreening(3, "2022-02-19T13:37:00.000Z"),
            mockScreening(4, "2022-02-19T13:37:00.000Z"),
            mockScreening(5, "2022-02-19T13:37:00.000Z"),
            mockScreening(6, "2022-02-19T13:37:00.000Z"),
            mockScreening(7, "2022-02-19T13:37:00.000Z"),
            mockScreening(8, "2022-02-19T13:37:00.000Z"),
            mockScreening(9, "2022-02-19T13:37:00.000Z"),
            mockScreening(10, "2022-02-19T13:37:00.000Z"),
            mockScreening(11, "2022-02-19T13:37:00.000Z"),
          ],
        };
      },
    };

    const results = await getAllScreenings(mockCms);

    expect(Array.isArray(results)).toBeTruthy();
    expect(results.length).toBe(10);
  });

  test("returns future screenings only", async () => {
    const mockCms = {
      async loadAllScreenings() {
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

    const results = await getAllScreenings(mockCms);
    const now = new Date();

    expect(results.length).toBe(4);
    results.forEach((screening) => {
      const date = new Date(screening.attributes.start_time);
      expect(date.getTime()).toBeGreaterThan(now.getTime());
    });
  });

  test("returns screenings from at most five next days", async () => {
    const mockCms = {
      async loadAllScreenings() {
        return {
          data: [
            mockScreening(1, "2022-02-16T13:37:00.000Z"),
            mockScreening(2, "2022-02-17T13:37:00.000Z"),
            mockScreening(3, "2022-02-18T13:37:00.000Z"),
            mockScreening(4, "2022-02-19T13:37:00.000Z"),
            mockScreening(5, "2022-02-20T13:37:00.000Z"),
            mockScreening(6, "2022-02-21T13:37:00.000Z"),
            mockScreening(7, "2022-02-22T13:37:00.000Z"),
          ],
        };
      },
    };

    const results = await getAllScreenings(mockCms);

    const fiveDaysFromNow = new Date(
      new Date().getTime() + 5 * 24 * 60 * 60 * 1000
    );

    expect(results.length).toBe(5);
    results.forEach((screening) => {
      const date = new Date(screening.attributes.start_time);
      expect(date.getTime()).toBeLessThan(fiveDaysFromNow.getTime());
    });
  });
});

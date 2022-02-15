import { test, jest } from "@jest/globals";

import createMovieReview from "./createMovieReview.js";

describe("createMovieReview()", () => {
  test("forwards valid review to CMS API", async () => {
    const mockCms = {
      postMovieReview: jest.fn().mockResolvedValue({}),
    };

    const movieId = 1;
    const data = {
      comment: "This is good",
      name: "Richard",
      rating: 1,
    };

    await createMovieReview(mockCms, movieId, data);

    expect(mockCms.postMovieReview).toHaveBeenCalledWith(movieId, data);
  });

  test("requires name", async () => {
    const mockCms = {
      postMovieReview: jest.fn().mockResolvedValue({}),
    };

    const movieId = 1;
    const data = {
      comment: "This is good",
      rating: 1,
    };

    const retVal = await createMovieReview(mockCms, movieId, data);

    expect(retVal).toBeFalsy();
    expect(mockCms.postMovieReview).not.toHaveBeenCalled();
  });

  test("requires rating", async () => {
    const mockCms = {
      postMovieReview: jest.fn().mockResolvedValue({}),
    };

    const movieId = 1;
    const data = {
      name: "Richard",
      comment: "This is good",
    };

    const retVal = await createMovieReview(mockCms, movieId, data);

    expect(retVal).toBeFalsy();
    expect(mockCms.postMovieReview).not.toHaveBeenCalled();
  });

  [
    ["foo", false],
    [0, true],
    [5, true],
    [8, false],
  ].forEach((params) => {
    const rating = params[0];
    const shouldForward = params[1];

    test(`validates rating=${rating} => ${shouldForward}`, async () => {
      const mockCms = {
        postMovieReview: jest.fn().mockResolvedValue({}),
      };

      const movieId = 1;
      const data = {
        comment: "This is good",
        name: "Richard",
        rating: rating,
      };

      const retVal = await createMovieReview(mockCms, movieId, data);

      if (!shouldForward) {
        expect(retVal).toBeFalsy();
      }

      expect(mockCms.postMovieReview.mock.calls.length).toBe(shouldForward? 1 : 0);
    });
  });
});

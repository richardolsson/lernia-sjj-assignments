import { test } from "@jest/globals";
import getMovieRating from "./getMovieRating";

const mockReview = (rating) => ({
  attributes: {
    comment: "Whatever",
    name: "Whatever",
    rating,
  }
});

describe("getMovieRating()", () => {
  test("calculates average rating from reviews in CMS", async () => {
    const mockCms = {
      async loadAllMovieReviews(movieId) {
        return {
          data: [
            mockReview(1),
            mockReview(1),
            mockReview(1),
            mockReview(5),
            mockReview(5),
            mockReview(5),
          ],
        };
      },
    };

    const result = await getMovieRating(mockCms, 1);
    expect(result).toMatchObject({
      rating: 3,
      source: "cms",
    });
  });
});

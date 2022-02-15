import { test } from "@jest/globals";
import getMovieRating from "./getMovieRating";

const mockReview = (rating) => ({
  attributes: {
    comment: "Whatever",
    name: "Whatever",
    rating,
  },
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

  test("uses IMDB rating when less than five reviews", async () => {
    const mockCms = {
      async loadMovie(movieId) {
        return {
          data: {
            attributes: {
              imdbId: "tt1234",
            },
          },
        };
      },
      async loadAllMovieReviews(movieId) {
        return {
          data: [mockReview(5), mockReview(5), mockReview(5)],
        };
      },
    };

    const mockImdb = {
      async loadMovieInfo(imdbId) {
        return {
          imdbRating: 7.7,
        };
      },
    };

    const result = await getMovieRating(mockCms, mockImdb, 1);
    expect(result).toMatchObject({
      rating: 7.7 / 2,
      source: "imdb",
    });
  });
});

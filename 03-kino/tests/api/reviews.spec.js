import { test, jest } from "@jest/globals";
import request from "supertest";

import createCmsAdapter from "../../src/adapters/cms.js";
import initApp from "../../src/app.js";


describe("GET /api/movies/{movie_id}/reviews", () => {
  test("returns only verified reviews", async () => {
    const cms = createCmsAdapter();
    const app = initApp(cms);

    const response = await request(app)
      .get("/api/movies/1/reviews")
      .expect(200);

    expect(response.body.data.data.length).toBeGreaterThan(0);
    response.body.data.data.forEach((review) => {
      expect(review.attributes.verified).toBeTruthy();
    });
  });

  test("returns different data on separate pages", async () => {
    const cms = createCmsAdapter();
    const app = initApp(cms);

    const response0 = await request(app)
      .get("/api/movies/1/reviews?page=1")
      .expect(200);

    const response1 = await request(app)
      .get("/api/movies/1/reviews?page=2")
      .expect(200);

    expect(response0.body.data.data[0].id).not.toEqual(response1.body.data.data[0].id);
  });
});

describe("POST /api/movies/{movie_id}/reviews", () => {
  test("responds with 400 for invalid input data", async () => {
    const mockCms = {
      postMovieReview: jest.fn().mockResolvedValue(null),
    };

    const app = initApp(mockCms);

    await request(app)
      .post("/api/movies/1/reviews")
      .send({
        name: "Richard",
        comment: "This is good",
        // Missing rating
      })
      .expect(400);
  });
});

import express from "express";
import createMovieReview from "./createMovieReview.js";
import getAllScreenings from "./getAllScreenings.js";
import getMovieRating from "./getMovieRating.js";
import getMovieReviews from "./getMovieReviews.js";
import getMovieScreenings from "./getMovieScreenings.js";


export default function initApiRouter(cms, imdb) {
  const router = express.Router();

  router.use(express.json());

  router.get("/screenings", async (req, res) => {
    const screenings = await getAllScreenings(cms);

    res.status(200).json({
      data: screenings,
    });
  });

  router.get("/movies/:movieId/screenings", async (req, res) => {
    const screenings = await getMovieScreenings(cms, req.params.movieId);

    res.status(200).json({
      data: screenings,
    });
  });

  router.get("/movies/:movieId/reviews", async (req, res) => {
    const reviews = await getMovieReviews(
      cms,
      req.params.movieId,
      req.query.page
    );

    res.status(200).json({
      data: reviews,
    });
  });

  router.post("/movies/:movieId/reviews", async (req, res) => {
    const review = await createMovieReview(cms, req.params.movieId, req.body);

    if (review) {
      res.status(201).json({
        data: review,
      });
    } else {
      res.status(400).end();
    }
  });

  router.get("/movies/:movieId/rating", async (req, res) => {
    const rating = await getMovieRating(cms, imdb, req.params.movieId);

    res.status(200).json({
      data: rating,
    });
  });

  return router;
}

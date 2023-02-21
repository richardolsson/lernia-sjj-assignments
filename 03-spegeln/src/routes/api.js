import express from 'express';

import MovieResource from '../resources/MovieResource.js';
import NextScreeningsResource from '../resources/NextScreeningsResource.js';

export default function initAPIRoutes(cms, omdb) {
  const router = express();

  router.use(express.json());

  router.get('/next_screenings', async (req, res) => {
    const resource = new NextScreeningsResource(cms);
    const data = await resource.retrieve();
    res.status(200).json({ data });
  });

  router.get('/movies/:movieId/screenings', async (req, res) => {
    const resource = new MovieResource(req.params.movieId, cms, omdb);
    const data = await resource.retrieveScreenings();
    res.status(200).json({ data });
  });

  router.get('/movies/:movieId/reviews', async (req, res) => {
    const page = req.query.p || 0;
    const resource = new MovieResource(req.params.movieId, cms, omdb);
    const data = await resource.retrieveReviews(page);
    res.status(200).json({ data });
  });

  router.post('/movies/:movieId/reviews', async (req, res) => {
    const resource = new MovieResource(parseInt(req.params.movieId), cms, omdb);
    const addRes = await resource.addReview(req.body.name, req.body.rating, req.body.comment);
    res.status(201).json(addRes);
  });

  router.get('/movies/:movieId/rating', async (req, res) => {
    const resource = new MovieResource(parseInt(req.params.movieId), cms, omdb);
    const data = await resource.retrieveAverageRating();
    res.status(200).json({ data });
  });

  return router;
}
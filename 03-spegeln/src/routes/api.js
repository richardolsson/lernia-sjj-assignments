import express from 'express';

import CMSAdapter from '../adapters/CMSAdapter.js';
import MovieResource from '../resources/MovieResource.js';
import NextScreeningsResource from '../resources/NextScreeningsResource.js';

const router = express();

router.get('/next_screenings', async (req, res) => {
  const cms = new CMSAdapter();
  const resource = new NextScreeningsResource(cms);
  const data = await resource.retrieve();
  res.status(200).json({ data });
});

router.get('/movies/:movieId/screenings', async (req, res) => {
  const cms = new CMSAdapter();
  const resource = new MovieResource(req.params.movieId, cms);
  const data = await resource.retrieveScreenings();
  res.status(200).json({ data });
});

router.get('/movies/:movieId/reviews', async (req, res) => {
  const page = req.query.p || 0;
  const cms = new CMSAdapter();
  const resource = new MovieResource(req.params.movieId, cms);
  const data = await resource.retrieveReviews(page);
  res.status(200).json({ data });
});

export default router;
import express from 'express';
import getRecentReviews from './getRecentReviews.js';
import cmsAdapter from './cmsAdapter.js';

const app = express();

app.get('/api/recent-reviews', async (req, res) => {
  const reviews = await getRecentReviews(cmsAdapter);
  res.status(200).json({
    data: reviews,
  });
});

export default app;
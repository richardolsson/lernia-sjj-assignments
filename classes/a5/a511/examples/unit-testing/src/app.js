import express from 'express';
import getRecentReviews from './getRecentReviews';

const app = express();

app.get('/api/recent-reviews', async (req, res) => {
  const reviews = await getRecentReviews();
  res.status(200).json({
    data: reviews,
  });
});

export default app;
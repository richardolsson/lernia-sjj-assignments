import express from 'express';

const app = express();

app.get('/api/recent-reviews', (req, res) => {
  res.status(200).end();
});

export default app;
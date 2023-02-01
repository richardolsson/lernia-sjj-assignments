import express from 'express';

import getRecentReviews from './getRecentReviews.js';

const app = express();

app.get('/api/recent-reviews', async (req, res) => {
    const data = await getRecentReviews();
    res.status(200).json(data);
});

export default app;
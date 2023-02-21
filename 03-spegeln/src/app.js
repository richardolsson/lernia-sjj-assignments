import express from "express";

import api from './routes/api.js';
import pages from './routes/pages.js';

const app = express();

app.use('/api', api);
app.use(pages);

export default app;
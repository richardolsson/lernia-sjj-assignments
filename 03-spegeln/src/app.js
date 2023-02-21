import express from "express";

import initAPIRoutes from './routes/api.js';
import initPageRoutes from './routes/pages.js';

export default function initApp(cms, omdb) {
  const app = express();

  app.use('/api', initAPIRoutes(cms, omdb));
  app.use(initPageRoutes());

  return app;
}
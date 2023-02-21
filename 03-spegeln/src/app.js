import express from "express";

import initAPIRoutes from './routes/api.js';
import initPageRoutes from './routes/pages.js';

export default function initApp() {
  const app = express();

  app.use('/api', initAPIRoutes());
  app.use(initPageRoutes());

  return app;
}
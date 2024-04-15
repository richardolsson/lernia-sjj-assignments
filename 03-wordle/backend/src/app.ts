import express from 'express';
import { IGameStore } from './game/types';
import { IDbAdapter } from './db/types';
import initApi from './api';

function initApp(gameStore: IGameStore, db: IDbAdapter) {
  const app = express();

  const apiRouter = initApi(gameStore, db);
  app.use(apiRouter);

  return app;
}

export default initApp;

import express from 'express';
import { engine } from 'express-handlebars';
import { IGameStore } from './game/types';
import { IDbAdapter } from './db/types';
import initApi from './api';

function initApp(gameStore: IGameStore, db: IDbAdapter) {
  const app = express();

  const apiRouter = initApi(gameStore, db);
  app.use(apiRouter);

  app.engine('handlebars', engine());
  app.set('view engine', 'handlebars');
  app.set('views', './templates');

  app.get('/highscore', async (req, res) => {
    const highscores = await db.getHighscores();

    res.render('highscore', { highscores });
  });

  app.use(express.static('./dist'));

  return app;
}

export default initApp;

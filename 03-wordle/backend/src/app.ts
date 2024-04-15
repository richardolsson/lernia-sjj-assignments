import express from 'express';
import { IGameStore } from './game/types';
import { z } from 'zod';
import getFeedback from './game/feedback';
import { IDbAdapter } from './db/types';

function initApp(gameStore: IGameStore, db: IDbAdapter) {
  const app = express();

  app.use(express.json());

  app.post('/api/games', (req, res) => {
    const schema = z.object({
      wordLength: z.number(),
      allowDuplicates: z.boolean(),
    });

    const payload = schema.safeParse(req.body);

    if (payload.success) {
      const { wordLength, allowDuplicates } = payload.data;
      const game = gameStore.createGame(wordLength, allowDuplicates);

      res.status(201).json({
        id: game.id,
      });
    } else {
      res.status(400).end();
    }
  });

  app.post('/api/games/:id/guesses', (req, res) => {
    const schema = z.object({
      guess: z.string(),
    });

    const payload = schema.safeParse(req.body);

    if (payload.success) {
      const game = gameStore.findGameById(req.params.id);
      if (game) {
        game.guesses.push(payload.data.guess);

        const feedback = getFeedback(game.correctWord, payload.data.guess);
        const allCorrect = feedback.every((obj) => obj.result == 'correct');

        if (allCorrect) {
          game.endTime = new Date();
          res.status(200).json({
            feedback,
            result: {
              duration: game.endTime.getTime() - game.startTime.getTime(),
              guessCount: game.guesses.length,
              correctWord: game?.correctWord,
            },
          });
        } else {
          res.status(200).json({
            feedback,
            result: null,
          });
        }
      } else {
        res.status(404).end();
      }
    } else {
      res.status(400).end();
    }
  });

  app.post('/api/games/:id/highscore', async (req, res) => {
    const schema = z.object({
      name: z.string(),
    });

    const payload = schema.safeParse(req.body);

    if (payload.success) {
      const game = gameStore.findGameById(req.params.id);
      if (game) {
        await db.saveHighscore(payload.data.name, game);
        res.status(201).end();
      } else {
        res.status(404).end();
      }
    } else {
      res.status(400).end();
    }
  });

  return app;
}

export default initApp;

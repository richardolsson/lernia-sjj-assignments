import express from 'express';
import { IGameStore } from './game/types';
import { z } from 'zod';
import getFeedback from './game/feedback';

function initApp(gameStore: IGameStore) {
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
        const feedback = getFeedback(game.correctWord, payload.data.guess);
        const allCorrect = feedback.every((obj) => obj.result == 'correct');
        const result = allCorrect
          ? {
              duration: 0,
              guessCount: 1,
              correctWord: game?.correctWord,
            }
          : null;

        res.status(200).json({
          feedback,
          result,
        });
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

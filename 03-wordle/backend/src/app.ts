import express from 'express';
import { IGameStore } from './game/types';
import { z } from 'zod';

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

  return app;
}

export default initApp;

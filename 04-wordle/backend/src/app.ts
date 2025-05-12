import express from 'express';
import { IDbAdapter } from './db/types';
import selectWord from './utils/selectWord';

export default function initApp(
  dbAdapter: IDbAdapter | null = null,
  allWords: string[] = [],
) {
  if (!dbAdapter) {
    throw new Error('Cant work without db adapter');
  }

  const app = express();

  app.use(express.json());

  app.post('/api/games', async (req, res) => {
    const config = req.body;
    const correctWord = selectWord(allWords, config);

    if (!correctWord) {
      res.status(409).json({
        error: 'No matching word',
      });
      return;
    }

    const game = await dbAdapter.createGame({
      config,
      correctWord: correctWord,
    });

    res.status(201).json({
      config: game.config,
      endTime: game.endTime,
      id: game.id,
      startTime: game.startTime,
    });
  });

  return app;
}

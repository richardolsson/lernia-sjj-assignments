import express from 'express';
import { IDbAdapter } from './db/types';
import selectWord from './utils/selectWord';
import feedback from './utils/feedback';

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

  app.post('/api/games/:id/guesses', async (req, res) => {
    const gameId = parseInt(req.params.id);
    const guess = req.body.guess;

    const game = await dbAdapter.findGame(gameId);

    if (!game) {
      res.status(404).send();
      return;
    }

    if (game.correctWord.length != guess.length) {
      res.status(400).send();
      return;
    }

    await dbAdapter.submitGuess(gameId, guess);

    const letters = feedback(guess, game.correctWord);
    const correct = letters.every((item) => item.result == 'correct');

    res.status(201).json({
      game: {
        id: game.id,
        config: game.config,
        endTime: game.endTime,
        startTime: game.startTime,
      },
      guess: {
        correct,
        letters,
      },
    });
  });

  return app;
}

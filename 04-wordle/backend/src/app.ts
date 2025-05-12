import express from 'express';
import { IDbAdapter } from './db/types';
import selectWord from './utils/selectWord';
import feedback from './utils/feedback';
import { engine } from 'express-handlebars';

export default function initApp(
  dbAdapter: IDbAdapter | null = null,
  allWords: string[] = [],
) {
  if (!dbAdapter) {
    throw new Error('Cant work without db adapter');
  }

  const app = express();

  app.engine('handlebars', engine());
  app.set('view engine', 'handlebars');
  app.set('views', './templates');

  app.get('/highscore', async (req, res) => {
    const highscores = await dbAdapter.listHighscores();
    res.render('highscore', {
      items: highscores.map((item) => ({
        name: item.name,
        guessCount: item.guessCount,
        word: item.game.correctWord,
        time:
          (new Date(item.game.endTime!).getTime() -
            new Date(item.game.startTime).getTime()) /
          1000,
      })),
    });
  });

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

    let game = await dbAdapter.findGame(gameId);

    if (!game || game.endTime) {
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

    if (correct) {
      game = await dbAdapter.endGame(gameId);
    }

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

  app.post('/api/games/:id/highscore', async (req, res) => {
    const gameId = parseInt(req.params.id);
    const name = req.body.name;

    const game = await dbAdapter.findGame(gameId);

    if (!game) {
      res.status(404).send();
      return;
    }

    if (!game.endTime) {
      res.status(409).send();
      return;
    }

    const id = await dbAdapter.submitHighscore(gameId, name);

    res.status(201).json({
      id,
      game,
      name,
    });
  });

  return app;
}

import fs from 'fs/promises';
import express from 'express';
import { engine } from 'express-handlebars';
import getRandomWord from './utils/getRandomWord';
import feedback from './utils/feedback';
import { v4 as uuidv4 } from 'uuid';
import { Game } from './types';
import { HighscoreModel } from './db';
import mongoose from 'mongoose';

const app = express();
app.use(express.json());

app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', './templates');

app.use('/static', express.static('./static'));

const GAMES: Game[] = [];

const MONGODB_URL = process.env.MONGODB_URL as string;

mongoose.connect(MONGODB_URL);

app.get('/', (req, res) => {
  res.render('game');
});

app.post('/api/games', async (req, res) => {
  const { wordLength, allowRepeating } = req.body;

  const wordsData = await fs.readFile('./words.txt');
  const wordList = wordsData.toString().split('\r\n');

  const correctWord = getRandomWord(wordLength, allowRepeating, wordList);

  const game: Game = {
    id: uuidv4().toString(),
    correctWord,
    allowRepeating,
    wordLength,
    guesses: [],
    startTime: new Date(),
    endTime: null,
  };

  GAMES.push(game);
  console.log(game);

  res.status(200).json({
    data: {
      id: game.id,
      allowRepeating: game.allowRepeating,
      wordLength: game.wordLength,
    }
  });
});

app.post('/api/games/:id/guesses', (req, res) => {
  const { guess } = req.body;
  const { id } = req.params;

  const game = GAMES.find(game => game.id == id);
  if (!game) {
    return res.status(404).end();
  }

  game.guesses.push(guess);

  const letters = feedback(guess, game.correctWord);
  const correct = letters.every(letterResult => letterResult.result == 'correct');

  if (correct) {
    game.endTime = new Date();
  }

  res.status(200).json({
    data: {
      correct,
      letters
    }
  })
});

app.post('/api/games/:id/highscore', async (req, res) => {
  const { name } = req.body;
  const { id } = req.params;

  const game = GAMES.find(game => game.id == id);
  if (!game) {
    return res.status(404).end();
  }

  if (!game.endTime) {
    return res.status(409).end();
  }

  const entry = new HighscoreModel({
    ...game,
    name,
  });

  await entry.save();

  res.status(201).json({
    data: entry.toJSON(),
  });
});

export default app;
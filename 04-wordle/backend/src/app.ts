import fs from 'fs/promises';
import express from 'express';
import getRandomWord from './utils/getRandomWord';
import feedback from './utils/feedback';
import { v4 as uuidv4 } from 'uuid';
import { Game } from './types';
import { HighscoreModel } from './db';
import mongoose from 'mongoose';

const app = express();
app.use(express.json());

const GAMES: Game[] = [];

const MONGODB_URL = process.env.MONGODB_URL as string;

mongoose.connect(MONGODB_URL);

app.post('/api/games', async (req, res) => {
  const { wordLength, allowRepeating } = req.body;

  const wordsData = await fs.readFile('./words.txt');
  const wordList = wordsData.toString().split('\r\n');

  const correctWord = getRandomWord(wordLength, allowRepeating, wordList);

  const game: Game = {
    id: uuidv4().toString(),
    correctWord,
    guesses: [],
  };

  GAMES.push(game);

  res.status(200).json({
    data: {
      id: game.id,
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

  const result = feedback(guess, game.correctWord);

  res.status(200).json({ data: result })
});

app.post('/api/games/:id/highscore', async (req, res) => {
  const { name } = req.body;
  const { id } = req.params;

  const game = GAMES.find(game => game.id == id);
  if (!game) {
    return res.status(404).end();
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
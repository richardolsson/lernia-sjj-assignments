import fs from 'fs/promises';
import express from 'express';
import getRandomWord from './utils/getRandomWord';
import { v4 as uuidv4 } from 'uuid';
import { Game } from './types';

const app = express();
app.use(express.json());

const GAMES: Game[] = [];

app.post('/api/games', async (req, res) => {
  const { wordLength, allowRepeating } = req.body;

  const wordsData = await fs.readFile('./words.txt');
  const wordList = wordsData.toString().split('\r\n');

  const correctWord = getRandomWord(wordLength, allowRepeating, wordList);

  const game: Game = {
    id: uuidv4().toString(),
    correctWord,
  };

  GAMES.push(game);

  res.status(200).json({
    data: {
      id: game.id,
    }
  });
});

export default app;
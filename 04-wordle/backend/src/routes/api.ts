import fs from 'fs/promises';
import { v4 as uuidv4 } from 'uuid';
import { Router } from "express";
import { HighscoreModel } from "../db";
import getRandomWord from "../utils/getRandomWord";
import feedback from '../utils/feedback';
import { Game } from '../types';

const router = Router();

const GAMES: Game[] = [];

router.post('/api/games', async (req, res) => {
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

router.post('/api/games/:id/guesses', (req, res) => {
  const { guess } = req.body;
  const { id } = req.params;

  const game = GAMES.find(game => game.id == id);
  if (!game) {
    return res.status(404).end();
  }

  if (game.guesses.length >= 6) {
    return res.status(409).end();
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

router.post('/api/games/:id/highscore', async (req, res) => {
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

export default router;
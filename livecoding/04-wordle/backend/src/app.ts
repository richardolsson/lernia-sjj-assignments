import express from 'express';
import fs from 'fs/promises';
import mongoose from 'mongoose';
import { GameSession } from './models';
import randomWord from './algo/randomWord';
import words from './words';

const app = express();
app.use(express.json());

app.get('', (req, res) => {
  res.send('Hello, world!');
});

app.get('/about', async (req, res) => {
  const buf = await fs.readFile('./pages/about.html');
  res.status(200).send(buf.toString());
});

app.use('/static', express.static('./static'));

app.post('/api/sessions', async (req, res) => {
  await mongoose.connect('mongodb://localhost:27017/game');

  const word = randomWord(words, req.body.wordLength, req.body.allowRepeat);

  const session = new GameSession({
    allowRepeat: req.body.allowRepeat,
    wordLength: req.body.wordLength,
    startTime: Date.now(),
    guesses: [],
    word: word,
  });

  await session.save();

  res.status(201).json({
    id: session._id.toString(),
  });
});

export default app;
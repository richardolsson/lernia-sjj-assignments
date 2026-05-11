import express from 'express';
import fs from 'fs/promises';
import mongoose from 'mongoose';
import { GameSession } from './models';
import randomWord from './algo/randomWord';
import words from './words';
import feedback from './algo/feedback';

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

app.post('/api/sessions/:id/guesses', async (req, res) => {
  await mongoose.connect('mongodb://localhost:27017/game');
  const id = req.params.id;
  const guess = req.body.guess;

  const session = await GameSession.findOne({ _id: id });

  if (session) {
    const result = feedback(guess, session.word);

    session.guesses.push(guess);

    const isCorrect = result.every(letterResult => letterResult.result == 'correct');
    if (isCorrect) {
      session.endTime = new Date();
    }

    await session.save();

    res.status(201).json({
      result,
    });
  } else {
    res.status(404).end();
  }
});

app.post('/api/sessions/:id/highscore', async (req, res) => {
  await mongoose.connect('mongodb://localhost:27017/game');
  const id = req.params.id;
  const name = req.body.name;

  const session = await GameSession.findOne({ _id: id });
  if (session && session.endTime) {
    session.name = name;
    await session.save();

    res.status(201).json(session);
  } else {
    res.status(404).end();
  }
});

export default app;
import express from "express";
import * as uuid from "uuid";

import { getRandomWord } from "./utils.js";
import { loadHighscores, saveHighscore } from "./db.js";

const app = express();

app.use(express.json());
app.use(express.static('../frontend/build'));

const GAMES = [];

// POST /api/games
app.post("/api/games", (req, res) => {
  const game = {
    correctWord: getRandomWord(),
    guesses: [],
    id: uuid.v4(),
    startTime: new Date(),
  };

  GAMES.push(game);

  res.status(201).json({ id: game.id });
});

// POST /api/games/:id/guesses
app.post("/api/games/:id/guesses", (req, res) => {
  const game = GAMES.find((savedGame) => savedGame.id == req.params.id);
  if (game) {
    const guess = req.body.guess;
    game.guesses.push(guess);

    if (guess === game.correctWord) {
      game.endTime = new Date();

      res.status(201).json({
        guesses: game.guesses,
        result: game,
        correct: true,
      });
    } else {
      res.status(201).json({
        guesses: game.guesses,
        correct: false,
      });
    }
  } else {
    res.status(404).end();
  }
});

// POST /api/games/:id/highscore
app.post("/api/games/:id/highscore", async (req, res) => {
  const game = GAMES.find((savedGame) => savedGame.id == req.params.id);
  if (game) {
    const name = req.body.name;
    const highscore = await saveHighscore({
      ...game,
      name,
    });

    res.status(201).json({ highscore });
  } else {
    res.status(404).end();
  }
});

app.get("/api/highscores", async (req, res) => {
  const highscores = await loadHighscores();
  res.json({
    highscores: highscores.map((entry) => ({
      ...entry,
      duration: new Date(entry.endTime) - new Date(entry.startTime),
    })),
  });
});

export default app;

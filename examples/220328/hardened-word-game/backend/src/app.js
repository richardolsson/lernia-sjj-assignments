import cors from "cors";
import express from "express";
import * as uuid from "uuid";

import { getRandomWord } from "./utils.js";
import { loadHighscores, saveHighscore } from "./db.js";

const app = express();

app.use(cors());
app.use(express.json());

const GAMES = [];

// POST /api/games
app.post("/api/games", (req, res) => {
  const game = {
    correctWord: getRandomWord(),
    id: uuid.v4(),
    startTime: new Date(),
  };

  GAMES.push(game);

  res.status(201).json({ id: game.id });
});

app.post("/api/highscores", async (req, res) => {
  const highscore = await saveHighscore(req.body);
  res.status(201).json({ highscore });
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

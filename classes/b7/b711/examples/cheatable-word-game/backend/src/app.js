import express from "express";

import { getRandomWord } from "./utils.js";
import { loadHighscores, saveHighscore } from "./db.js";

const app = express();

app.use(express.json());
app.use(express.static('../frontend/build'));

app.get("/api/random_word", (req, res) => {
  const word = getRandomWord();

  res.json({
    word,
  });
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

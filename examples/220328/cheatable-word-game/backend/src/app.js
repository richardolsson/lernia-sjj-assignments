import cors from "cors";
import express from "express";

import { getRandomWord } from "./utils.js";
import { loadHighscores, saveHighscore } from "./db.js";

const app = express();

app.use(cors());
app.use(express.json());

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
  res.json({ highscores: await loadHighscores() });
});

export default app;

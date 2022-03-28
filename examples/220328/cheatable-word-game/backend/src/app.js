import cors from "cors";
import express from "express";

import { getRandomWord } from "./utils.js";

const app = express();

app.use(cors());

app.get("/api/random_word", (req, res) => {
  const word = getRandomWord();

  res.json({
    word,
  });
});

export default app;

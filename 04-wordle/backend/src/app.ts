import express from "express";
import cors from "cors";
import { makeWordPicker } from "./utils/wordPicker";
import { v4 as uuidv4 } from "uuid";

const app = express();

const wordPicker = makeWordPicker([
  "HELLO",
  "CYCLE",
  "FALSE",
  "TRUTH",
  "COOL",
  "FULL",
  "HIGH",
  "EMPTY",
]);

app.use(cors());
app.use(express.json());

const GAMES = [];

app.post("/api/games", (req, res) => {
  const wordLength: number = req.body.wordLength;
  const unique: boolean = req.body.unique;

  const game = {
    id: uuidv4(),
    startTime: new Date(),
    word: wordPicker(wordLength, unique),
    wordLength,
    unique,
  };

  GAMES.push(game);

  res.status(201).json({ id: game.id });
});

app.use(express.static("../frontend/build"));

export default app;

import express from "express";
import cors from "cors";
import { v4 as uuidv4 } from "uuid";
import { connect } from "mongoose";
import { engine } from "express-handlebars";

import { makeWordPicker } from "./utils/wordPicker";
import { Game, LetterResult } from "./types";
import feedback from "./utils/feedback";
import { GameHighscore } from "./models";

const app = express();

app.engine("handlebars", engine());
app.set("view engine", "handlebars");
app.set("views", "./templates");

connect("mongodb://localhost:27017/test");

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

const GAMES: Game[] = [];

app.post("/api/games", (req, res) => {
  const wordLength: number = req.body.wordLength;
  const unique: boolean = req.body.unique;

  const game = {
    id: uuidv4(),
    guesses: [],
    startTime: new Date(),
    word: wordPicker(wordLength, unique),
    wordLength,
    unique,
  };

  GAMES.push(game);

  res.status(201).json({ id: game.id, wordLength, unique });
});

app.post("/api/games/:id/guesses", (req, res) => {
  const guess = req.body.guess;
  const game = GAMES.find((game) => game.id == req.params.id);

  if (!game) {
    res.status(404).end();
    return;
  }

  const result = feedback(game.word, guess);
  game.guesses.push(result);

  const allCorrect = result.every((lf) => lf.result == LetterResult.CORRECT);
  if (allCorrect) {
    game.endTime = new Date();
    res.status(201).json({ correct: true, guesses: game.guesses, game });
  } else {
    res.status(201).json({ correct: false, guesses: game.guesses });
  }
});

app.post("/api/games/:id/highscore", async (req, res) => {
  const name = req.body.name;
  const game = GAMES.find((game) => game.id == req.params.id);

  if (!game) {
    res.status(404).end();
    return;
  }

  if (!game.endTime) {
    res.status(403).end();
    return;
  }

  const hs = new GameHighscore({
    ...game,
    name,
  });

  await hs.save();

  res.status(201).json({
    ...game,
    name,
  });
});

app.get("/info", (req, res) => {
  res.render("info");
});

app.get("/highscore", async (req, res) => {
  const wordLength = req.query.wordLength
    ? parseInt(req.query.wordLength as string)
    : undefined;

  const unique = req.query.unique as "true" | "false" | undefined;

  const highscores = await GameHighscore.find();
  const filtered = highscores.filter((hs) => {
    if (wordLength && hs.wordLength != wordLength) {
      return false;
    }

    if (unique == "true" && !hs.unique) {
      return false;
    } else if (unique == "false" && hs.unique) {
      return false;
    }

    return true;
  });

  res.render("highscore", {
    highscores: filtered.map((hs) => ({
      name: hs.name,
      wordLength: hs.wordLength,
      unique: hs.unique,
      duration: (hs.endTime.getTime() - hs.startTime.getTime()) / 1000,
    })),
  });
});

app.use(express.static("./public"));

export default app;

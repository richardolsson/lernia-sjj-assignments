import { Schema, model } from "mongoose";

import { Game } from "./types";

type TGameHighscore = Game & {
  name: string;
  endTime: Date;
};

const highscoreSchema = new Schema<TGameHighscore>({
  name: { type: String, required: true },
  id: { type: String, required: true },
  startTime: { type: Date, required: true },
  endTime: { type: Date, required: true },
  wordLength: { type: Number, required: true },
  unique: { type: Boolean, required: true },
  guesses: [
    {
      letter: String,
      result: String,
    },
  ],
});

const GameHighscore = model<TGameHighscore>("GameHighscore", highscoreSchema);

export { GameHighscore };

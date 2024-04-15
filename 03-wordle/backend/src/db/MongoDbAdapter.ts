import mongoose from "mongoose";
import { Game } from "../game/types";
import { IDbAdapter } from "./types";
import { Schema } from "zod";

type Highscore = {
  allowDuplicates: boolean;
  wordLength: number;
  name: string;
  duration: number;
  guessCount: number;
}

const highscoreSchema = new mongoose.Schema<Highscore>({
  allowDuplicates: Boolean,
  wordLength: Number,
  name: String,
  duration: Number,
  guessCount: Number,
});

const HighscoreModel = mongoose.model<Highscore>('Highscore', highscoreSchema);

export default class MongoDbAdapter implements IDbAdapter {
  constructor(url: string) {
    mongoose.connect(url);
  }

  async saveHighscore(name: string, game: Game): Promise<void> {
    if (!game.endTime) {
      throw new Error('Highscore cannot be saved without endTime');
    }

    const model = new HighscoreModel({
      allowDuplicates: game.allowDuplicates,
      duration: game.endTime.getTime() - game.startTime.getTime(),
      name: name,
      wordLength: game.wordLength,
      guessCount: game.guesses.length,
    });

    await model.save();
  }
}
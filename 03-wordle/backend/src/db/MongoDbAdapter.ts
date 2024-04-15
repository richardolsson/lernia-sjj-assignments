import mongoose from 'mongoose';
import { Game } from '../game/types';
import { Highscore, IDbAdapter } from './types';

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

  async getHighscores(
    filters?: { wordLength?: number | undefined } | undefined
  ): Promise<Highscore[]> {
    const query: Partial<Highscore> = {};
    if (filters?.wordLength) {
      query.wordLength = filters.wordLength;
    }

    const highscores = await HighscoreModel.find(query);
    return highscores.map((obj) => obj.toJSON());
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

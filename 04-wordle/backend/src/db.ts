import mongoose from 'mongoose';
import { HighscoreEntry } from "./types"

const highscoreEntrySchema = new mongoose.Schema<HighscoreEntry>({
  correctWord: String,
  guesses: [String],
  name: String,
});

const HighscoreModel = mongoose.model<HighscoreEntry>(
  'HighscoreEntry', highscoreEntrySchema);

export { HighscoreModel };
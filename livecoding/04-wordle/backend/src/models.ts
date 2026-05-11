import mongoose from "mongoose";

const GameSessionSchema = new mongoose.Schema({
  wordLength: { type: Number, required: true },
  allowRepeat: { type: Boolean, required: true },
  startTime: { type: Date, required: true },
  endTime: { type: Date, required: false },
  word: { type: String, required: true },
  guesses: { type: [String], required: true },
  name: { type: String, required: false },
});

const GameSession = mongoose.model('GameSession', GameSessionSchema);

export { GameSession };
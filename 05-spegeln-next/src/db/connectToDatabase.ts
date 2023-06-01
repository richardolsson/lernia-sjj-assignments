import mongoose from "mongoose";

export default async function connectToDatabase() {
  const url = process.env.MONGODB_URL;
  if (!url) {
    throw new Error('Env var MONGODB_URL must be defined');
  }

  return mongoose.connect(url);
}
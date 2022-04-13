import { NextApiRequest, NextApiResponse } from "next";
import { v4 as uuidv4 } from "uuid";
import { addGame } from "../../server/utils/games";

import { makeWordPicker } from "../../server/utils/wordPicker";

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

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method == "POST") {
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

    addGame(game);

    res.status(201).json({ id: game.id, wordLength, unique });
  } else {
    res.status(405).end();
  }
}

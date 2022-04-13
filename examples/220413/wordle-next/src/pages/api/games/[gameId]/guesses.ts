import { NextApiRequest, NextApiResponse } from "next";
import { LetterResult } from "../../../../server/types";
import feedback from "../../../../server/utils/feedback";
import { findGame } from "../../../../server/utils/games";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method == "POST") {
    const guess = req.body.guess;
    const game = findGame(req.query.gameId as string);

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
  } else {
    res.status(405).end();
  }
}

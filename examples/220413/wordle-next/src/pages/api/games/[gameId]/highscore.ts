import { connect } from "mongoose";
import { NextApiRequest, NextApiResponse } from "next";
import { GameHighscore } from "../../../../server/models";
import { findGame } from "../../../../server/utils/games";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method == "POST") {
    const name = req.body.name;
    const game = findGame(req.query.gameId as string);

    if (!game) {
      res.status(404).end();
      return;
    }

    if (!game.endTime) {
      res.status(403).end();
      return;
    }

    await connect("mongodb://localhost:27017/test");

    const hs = new GameHighscore({
      ...game,
      name,
    });

    await hs.save();

    res.status(201).json({
      ...game,
      name,
    });
  } else {
    res.status(405).end();
  }
}

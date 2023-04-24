import { Router } from "express";
import { HighscoreModel } from '../db';

const router = Router();

router.get('/', (req, res) => {
  res.render('game');
});

router.get('/info', (req, res) => {
  res.render('info');
});

router.get('/highscore', async (req, res) => {
  const entryModels = await HighscoreModel.find();
  const entries = entryModels
    .map(model => {
      const durationMs = model.endTime.getTime() - model.startTime.getTime();

      return {
        ...model.toJSON(),
        duration: Math.round(durationMs / 100) / 10,
      };
    })
    .sort((a, b) => {
      return a.duration - b.duration;
    });

  res.render('highscore', { entries });
});

export default router;
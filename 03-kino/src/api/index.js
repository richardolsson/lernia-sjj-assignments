import express from "express";
import createCmsAdapter from "../adapters/cms.js";
import getAllScreenings from "./getAllScreenings.js";

const router = express.Router();

router.get("/screenings", async (req, res) => {
  const cms = createCmsAdapter();
  const screenings = await getAllScreenings(cms);

  res.status(200).json({
    data: screenings,
  });
});

export default router;

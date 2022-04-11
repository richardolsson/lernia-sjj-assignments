import express from "express";
import cors from "cors";

const app = express();

app.use(cors());

app.get("/api/random", (req, res) => {
  res.status(200).json({ randomNumber: Math.random() });
});

app.use(express.static("../frontend/build"));

export default app;

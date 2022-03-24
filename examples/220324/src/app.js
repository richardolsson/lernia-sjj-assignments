import express from "express";

import { Room } from "./models.js";

const app = express();

// GET /rooms
app.get("/rooms", async (req, res) => {
  const rooms = await Room.find();
  res.json(rooms);
});

// POST /rooms

export default app;

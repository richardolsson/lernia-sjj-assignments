import express from "express";

import { Room } from "./models.js";

const app = express();

app.use(express.json());

// GET /rooms
app.get("/rooms", async (req, res) => {
  const rooms = await Room.find();
  res.json(rooms);
});

// POST /rooms
app.post("/rooms", async (req, res) => {
  const room = new Room(req.body);
  await room.save();

  res.json(room);
});

export default app;

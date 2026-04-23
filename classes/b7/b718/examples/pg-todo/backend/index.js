import fs from 'fs/promises';
import express from 'express';
import mongoose from 'mongoose';

import Task from './src/models/Task.js';

const MONGODB_URL = process.env.MONGODB_URL;

const app = express();

app.use(express.json());

app.get('/api/tasks', async (req, res) => {
  await mongoose.connect(MONGODB_URL);
  const tasks = await Task.find();
  res.json(tasks);
});

app.post('/api/tasks', async (req, res) => {
  await mongoose.connect(MONGODB_URL);

  const newTask = new Task({
    label: req.body.label,
    completed: req.body.completed,
  });

  await newTask.save();

  res.status(201).json(newTask);
});

app.get('/', async (req, res) => {
  const htmlBuffer = await fs.readFile('../frontend/dist/index.html');
  res.send(htmlBuffer.toString());
});

app.use('/assets', express.static('../frontend/dist/assets'));

app.listen(5080);
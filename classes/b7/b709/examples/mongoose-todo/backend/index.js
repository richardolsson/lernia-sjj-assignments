import fs from 'fs/promises';
import express from 'express';
import mongoose from 'mongoose';

import Task from './src/models/Task.js';

const app = express();

app.use(express.json());

app.get('/api/tasks', async (req, res) => {
  await mongoose.connect('mongodb://localhost:27017/todo');
  const tasks = await Task.find();
  res.json(tasks);
});

app.post('/api/tasks', (req, res) => {
  const task = req.body;
  TASKS.push(task);

  res.status(201).json(task);
});

app.get('/', async (req, res) => {
  const htmlBuffer = await fs.readFile('../frontend/dist/index.html');
  res.send(htmlBuffer.toString());
});

app.use('/assets', express.static('../frontend/dist/assets'));

app.listen(5080);
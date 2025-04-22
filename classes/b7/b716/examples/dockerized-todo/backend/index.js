import fs from 'fs/promises';
import express from 'express';
import mongoose from 'mongoose';
import { Task } from './src/models.js';

const app = express();

app.use(express.json());

app.use((req, res, next) => {
  console.log(req.method, req.url);
  next();
});

app.get('/api/tasks', async (req, res) => {
  await mongoose.connect(process.env.MONGODB_URL);

  const tasks = await Task.find();

  res.json({
    data: tasks
  });
});

app.post('/api/tasks', async (req, res) => {
  await mongoose.connect(process.env.MONGODB_URL);

  const newTask = new Task({
    label: req.body.label,
    completed: false,
  });

  await newTask.save();

  res.status(201).json({ data: newTask });
});

app.get('/', async (req, res) => {
  const htmlText = await fs.readFile('../frontend/dist/index.html');
  res.send(htmlText.toString());
});

app.use('/assets', express.static('../frontend/dist/assets'));

app.listen(5080);
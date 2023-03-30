import express from 'express';
import mongoose from 'mongoose';
import { Task } from './models.js';

mongoose.connect(process.env.MONGODB_URL);

const app = express();
app.use(express.json());
app.use(express.static('../frontend/build'));

// Domain objects:
// * Task

// Resources
// * /tasks (GET to retrieve, POST to create)
// * /tasks/ID (PATCH to update, DELETE to remove)

app.get('/tasks', async (req, res) => {
  const tasks = await Task.find();

  res.status(200).json({
    data: tasks,
  });
});

app.post('/tasks', async (req, res) => {
  // TODO: Check that req.body is correctly formatted
  const task = new Task(req.body);
  await task.save();

  res.status(201).json({ data: req.body });
});

app.listen(5080);
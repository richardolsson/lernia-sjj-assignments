import fs from 'fs/promises';
import express from 'express';

const app = express();

app.use(express.json());

const TASKS = [
  {
    label: 'Learn HTML',
    completed: true,
  },
  {
    label: 'Learn CSS',
    completed: true,
  },
  {
    label: 'Learn React',
    completed: true,
  },
  {
    label: 'Learn fullstack',
    completed: false,
  },
];

app.get('/api/tasks', (req, res) => {
  res.json(TASKS);
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
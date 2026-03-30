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

app.listen(5080);
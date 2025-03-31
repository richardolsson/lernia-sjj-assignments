import express from 'express';

const app = express();

const TASKS = [
  {
    label: 'Learn HTML',
    completed: true,
  },
  {
    label: 'Learn JS',
    completed: true,
  },
  {
    label: 'Learn React',
    completed: false,
  }
];

app.use(express.json());

app.use((req, res, next) => {
  console.log(req.method, req.url);
  next();
});

app.get('/api/tasks', (req, res) => {
  res.json({
    data: TASKS
  });
});

app.post('/api/tasks', (req, res) => {
  const newTask = {
    label: req.body.label,
    completed: false,
  }
  TASKS.push(newTask);

  res.status(201).json({ data: newTask });
});

app.listen(5080);
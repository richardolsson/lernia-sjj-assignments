import express from 'express';

const app = express();

app.get('/api/tasks', (req, res) => {
  res.json([
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
  ]);
});

app.listen(5080);
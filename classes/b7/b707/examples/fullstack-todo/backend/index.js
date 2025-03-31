import express from 'express';

const app = express();

app.use((req, res, next) => {
  console.log(req.method, req.url);
  next();
});

app.get('/api/tasks', (req, res) => {
  res.json({
    data: [
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
    ],
  });
});

app.listen(5080);
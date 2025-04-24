import fs from 'fs/promises';
import express from 'express';

const app = express();

app.use(express.json());

app.use((req, res, next) => {
  console.log(req.method, req.url);
  next();
});

app.get('/api/tasks', async (req, res) => {
  // TODO: Get tasks from database

  res.json({
    data: tasks
  });
});

app.post('/api/tasks', async (req, res) => {
  // TODO: Create task in database

  res.status(201).json({ data: newTask });
});

app.get('/', async (req, res) => {
  const htmlText = await fs.readFile('../frontend/dist/index.html');
  res.send(htmlText.toString());
});

app.use('/assets', express.static('../frontend/dist/assets'));

app.listen(5080);
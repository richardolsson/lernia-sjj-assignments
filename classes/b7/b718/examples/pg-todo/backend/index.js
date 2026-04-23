import fs from 'fs/promises';
import express from 'express';

const app = express();

app.use(express.json());

app.get('/api/tasks', async (req, res) => {
  res.json({});
});

app.post('/api/tasks', async (req, res) => {
  res.status(201).json({});
});

app.get('/', async (req, res) => {
  const htmlBuffer = await fs.readFile('../frontend/dist/index.html');
  res.send(htmlBuffer.toString());
});

app.use('/assets', express.static('../frontend/dist/assets'));

app.listen(5080);
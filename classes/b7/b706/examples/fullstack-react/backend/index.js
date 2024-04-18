import express from 'express';
import fs from 'fs/promises';

const app = express();
app.use(express.json());

const items = [];

app.use((req, res, next) => {
  console.log(req.method, req.path);
  next();
});

app.get('/', async (req, res) => {
  const html = await fs.readFile('../frontend/dist/index.html');
  res.type('html').send(html);
});

app.get('/api/items', (req, res) => {
  res.json({ items });
});

app.post('/api/items', (req, res) => {
  const item = req.body
  console.log(req.body);
  items.push(item);

  res.status(201).json(item);
});

app.use('/assets', express.static('../frontend/dist/assets'));

app.listen(5080);
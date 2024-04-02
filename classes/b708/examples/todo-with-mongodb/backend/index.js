import express from 'express';
import fs from 'fs/promises';
import mongoose from 'mongoose';
import { Item } from './src/models.js';

mongoose.connect(process.env.DB_URL);

const app = express();
app.use(express.json());

app.use((req, res, next) => {
  console.log(req.method, req.path);
  next();
});

app.get('/', async (req, res) => {
  const html = await fs.readFile('../frontend/dist/index.html');
  res.type('html').send(html);
});

app.get('/api/items', async (req, res) => {
  const items = await Item.find();
  res.json({ items });
});

app.post('/api/items', async (req, res) => {
  const itemData = req.body
  console.log(req.body);

  const itemModel = new Item(itemData);
  await itemModel.save();

  res.status(201).json(itemData);
});

app.use('/assets', express.static('../frontend/dist/assets'));

app.listen(5080);
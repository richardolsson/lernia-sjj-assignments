import express from 'express';


const app = express();
app.use(express.json());

const items = [];

app.use((req, res, next) => {
  console.log(req.method, req.path);
  next();
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

app.listen(5080);
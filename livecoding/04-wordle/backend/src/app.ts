import express from 'express';
import fs from 'fs/promises';

const app = express();

app.get('', (req, res) => {
  res.send('Hello, world!');
});

app.get('/about', async (req, res) => {
  const buf = await fs.readFile('./pages/about.html');
  res.status(200).send(buf.toString());
});

app.use('/static', express.static('./static'));

export default app;
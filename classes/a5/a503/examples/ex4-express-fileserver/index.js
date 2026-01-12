import express from 'express';
import fs from 'fs/promises';

const app = express();

app.get('/index.html', async (req, res) => {
  const content = await fs.readFile('./static/index.html');
  const html = content.toString();

  res.send(html);
});

app.listen(5080);
import express from 'express';
import fs from 'fs/promises';

const app = express();

app.get('/', async (req, res) => {
  const content = await fs.readFile('./static/index.html');
  const html = content.toString();
  res.send(html);
});

app.get('/index.html', async (req, res) => {
  const content = await fs.readFile('./static/index.html');
  const html = content.toString();
  res.send(html);
});

app.get('/style.css', async (req, res) => {
  const content = await fs.readFile('./static/style.css');
  const css = content.toString();
  res.setHeader('content-type', 'text/css');
  res.send(css);
});

app.listen(5080);
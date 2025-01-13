import express from 'express';
import fs from 'fs/promises';

const app = express();

app.get('/', async (request, response) => {
  const buf = await fs.readFile('./content/index.html');
  const text = buf.toString();

  response.send(text);
});

app.get('/about', async (request, response) => {
  const buf = await fs.readFile('./content/about.html');
  const text = buf.toString();

  response.send(text);
});

app.get('/contact', async (request, response) => {
  const buf = await fs.readFile('./content/contact.html');
  const text = buf.toString();

  response.send(text);
});

app.use('/static', express.static('./static'));

app.listen(3080);
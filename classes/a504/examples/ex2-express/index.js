import express from 'express';
import fs from 'fs/promises';

const app = express();

app.get('/', async (request, response) => {
  const buf = await fs.readFile('./templates/index.html');
  const html = buf.toString();

  response.send(html);
});

app.get('/about', async (request, response) => {
  const buf = await fs.readFile('./templates/about.html');
  const html = buf.toString();

  response.send(html);
});

app.get('/contact', async (request, response) => {
  const buf = await fs.readFile('./templates/contact.html');
  const html = buf.toString();

  response.send(html);
});


app.use('/static', express.static('./static'));

app.listen(3080);
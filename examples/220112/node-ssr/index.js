import express from 'express';
import fs from 'fs/promises';

const app = express();

async function loadHeader() {
  const headerBuf = await fs.readFile('./templates/header.html');
  const headerText = headerBuf.toString();
  return headerText;
}

app.get('/', async (req, res) => {
  const headerText = await loadHeader();

  const htmlBuf = await fs.readFile('./templates/index.html');
  const htmlText = htmlBuf.toString().replace('%header%', headerText);
  res.send(htmlText);
});

app.get('/about', async (req, res) => {
  const headerText = await loadHeader();

  const htmlBuf = await fs.readFile('./templates/about.html');
  const htmlText = htmlBuf.toString().replace('%header%', headerText);
  res.send(htmlText);
});

app.get('/contact', async (req, res) => {
  const headerText = await loadHeader();

  const htmlBuf = await fs.readFile('./templates/contact.html');
  const htmlText = htmlBuf.toString().replace('%header%', headerText);
  res.send(htmlText);
});

app.use('/', express.static('./static'));

app.listen(5080);

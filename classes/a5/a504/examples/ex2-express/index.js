import express from 'express';
import fs from 'fs/promises';

const app = express();

async function renderPage(page) {
  const templateBuf = await fs.readFile('./templates/page.html');
  const templateText = templateBuf.toString();

  const contentBuf = await fs.readFile(`./content/${page}.html`);
  const contentText = contentBuf.toString();

  const htmlText = templateText.replace('::page::', contentText);

  return htmlText;
}

app.get('/', async (req, res) => {
  const htmlText = await renderPage('index');
  res.send(htmlText);
});

app.get('/contact', async (req, res) => {
  const htmlText = await renderPage('contact');
  res.send(htmlText);
});

app.get('/about', async (req, res) => {
  const htmlText = await renderPage('about');
  res.send(htmlText);
});

app.use('/', express.static('./static'));

app.listen(5080);
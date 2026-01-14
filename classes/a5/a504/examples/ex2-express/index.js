import express from 'express';
import renderPage from './lib/renderPage.js';

const app = express();


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
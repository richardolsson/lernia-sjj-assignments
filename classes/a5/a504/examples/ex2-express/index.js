import express from 'express';
import renderPage from './lib/renderPage.js';

const app = express();

app.get('/', (request, response) => {
  renderPage(response, 'index');
});

app.get('/about', async (request, response) => {
  renderPage(response, 'about');
});

app.get('/contact', async (request, response) => {
  renderPage(response, 'contact');
});

app.use('/static', express.static('./static'));

app.listen(3080);
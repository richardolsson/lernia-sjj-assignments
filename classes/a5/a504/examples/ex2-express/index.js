import express from 'express';
import fs from 'fs/promises';

const app = express();

async function renderPage(response, page) {
  const contentBuf = await fs.readFile(`./content/${page}.html`);
  const contentText = contentBuf.toString();

  const templateBuf = await fs.readFile('./templates/main.html');
  const templateText = templateBuf.toString();

  const outputHtml = templateText.replace('=#content#=', contentText);

  response.send(outputHtml);
}

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
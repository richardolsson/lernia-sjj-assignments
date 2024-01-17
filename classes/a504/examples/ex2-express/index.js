import express from 'express';
import fs from 'fs/promises';

const app = express();

async function renderPage(response, page) {
  const buf = await fs.readFile(`./templates/main.html`);
  const html = buf.toString();

  const contentBuf = await fs.readFile(`./content/${page}.html`);
  const contentHtml = contentBuf.toString();

  const rendered = html.replace('%%content%%', contentHtml);

  response.send(rendered);
}

app.get('/', async (request, response) => {
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
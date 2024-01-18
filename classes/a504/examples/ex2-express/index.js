import express from 'express';
import fs from 'fs/promises';

const app = express();

const MENU = [
  {
    label: 'Home page',
    link: '/',
  },
  {
    label: 'About us',
    link: '/about',
  },
  {
    label: 'Contact us',
    link: '/contact',
  },
];

async function renderPage(response, page) {
  const buf = await fs.readFile(`./templates/main.html`);
  const html = buf.toString();

  const menuItemStrings = MENU.map((item) => {
    return `<li><a href="${item.link}">${item.label}</a></li>`;
  });

  const menuString = menuItemStrings.join('\n');

  const contentBuf = await fs.readFile(`./content/${page}.html`);
  const contentHtml = contentBuf.toString();

  const rendered = html.replace('%%content%%', contentHtml).replace('#menu#', menuString);

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
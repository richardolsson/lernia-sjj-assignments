import express from 'express';
import fs from 'fs/promises';

const app = express();

const MENU = [
  {
    label: 'Home page',
    id: 'index',
    link: '/',
  },
  {
    label: 'About us',
    id: 'about',
    link: '/about',
  },
  {
    label: 'Contact us',
    id: 'contact',
    link: '/contact',
  }
];

async function renderPage(response, page) {
  const contentBuf = await fs.readFile(`./content/${page}.html`);
  const contentText = contentBuf.toString();

  const templateBuf = await fs.readFile('./templates/main.html');
  const templateText = templateBuf.toString();

  const htmlItems = MENU.map((item) => {
    const className = item.id == page? 'active' : 'inactive';
    return `<li class="menu-item ${className}"><a href="${item.link}">${item.label}</a></li>`;
  });

  const menuText = htmlItems.join('\n');

  const outputHtml = templateText
    .replace('=#content#=', contentText)
    .replace('%%menu%%', menuText);

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
import express from 'express';
import { engine } from 'express-handlebars';

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

const app = express();
app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', './templates');

function renderPage(response, page) {
  const currentPath = (page == 'index')? '/' : `/${page}`;

  response.render(page, {
    menuItems: MENU.map(item => {
      return {
        active: currentPath == item.link,
        label: item.label,
        link: item.link,
      };
    })
  });
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

app.listen(8000);

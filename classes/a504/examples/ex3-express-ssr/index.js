import express from 'express';
import fs from 'fs/promises';

const app = express();

const MENU = [
    {
        label: 'Home',
        link: '/',
    },
    {
        label: 'About us',
        link: '/about',
    },
    {
        label: 'Contact us',
        link: '/contact',
    }
];

async function renderTemplate(res, template) {
    const templateBuf = await fs.readFile('./templates/' + template);

    const headerBuf = await fs.readFile('./templates/header.html');
    const htmlItems = MENU.map(itemObj => {
        return `<li class="menu-item"><a href="${itemObj.link}">${itemObj.label}</a></li>`;
    });

    const headerText = headerBuf.toString().replace('%items%', htmlItems.join('\n'));

    const htmlText = templateBuf.toString().replace('%header%', headerText);
    res.type('html');
    res.send(htmlText);
}

app.get('/', async (req, res) => {
    await renderTemplate(res, 'index.html');
});

app.get('/about', async (req, res) => {
    await renderTemplate(res, 'about.html');
});

app.get('/contact', async (req, res) => {
    await renderTemplate(res, 'contact.html');
});

app.use('/static', express.static('./static'));

app.listen(3080);
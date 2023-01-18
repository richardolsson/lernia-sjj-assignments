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

async function renderTemplate(res, template, activePath) {
    const templateBuf = await fs.readFile('./templates/' + template);

    const headerBuf = await fs.readFile('./templates/header.html');
    const htmlItems = MENU.map(itemObj => {
        const stateClass = (itemObj.link == activePath)? 'active' : 'inactive';
        return `<li class="menu-item ${stateClass}"><a href="${itemObj.link}">${itemObj.label}</a></li>`;
    });

    const headerText = headerBuf.toString().replace('%items%', htmlItems.join('\n'));

    const htmlText = templateBuf.toString().replace('%header%', headerText);
    res.type('html');
    res.send(htmlText);
}

app.get('/', async (req, res) => {
    await renderTemplate(res, 'index.html', '/');
});

app.get('/about', async (req, res) => {
    await renderTemplate(res, 'about.html', '/about');
});

app.get('/contact', async (req, res) => {
    await renderTemplate(res, 'contact.html', '/contact');
});

app.use('/static', express.static('./static'));

app.listen(3080);
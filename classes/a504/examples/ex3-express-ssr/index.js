import express from 'express';
import fs from 'fs/promises';

const app = express();

async function renderTemplate(res, template) {
    const templateBuf = await fs.readFile('./templates/' + template);
    const headerBuf = await fs.readFile('./templates/header.html');
    const htmlText = templateBuf.toString().replace('%header%', headerBuf.toString());
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
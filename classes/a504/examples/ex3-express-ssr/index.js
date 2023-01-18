import express from 'express';
import fs from 'fs/promises';

const app = express();

app.get('/', async (req, res) => {
    const templateBuf = await fs.readFile('./templates/index.html');
    res.type('html');
    res.send(templateBuf);
});

app.get('/about', async (req, res) => {
    const templateBuf = await fs.readFile('./templates/about.html');
    res.type('html');
    res.send(templateBuf);
});

app.get('/contact', async (req, res) => {
    const templateBuf = await fs.readFile('./templates/contact.html');
    res.type('html');
    res.send(templateBuf);
});

app.use('/static', express.static('./static'));

app.listen(3080);
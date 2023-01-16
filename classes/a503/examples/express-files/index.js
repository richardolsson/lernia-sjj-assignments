import express from 'express';
import fs from 'fs/promises';

const app = express();

app.get('/', async (req, res) => {
    const buf = await fs.readFile('./static/index.html');
    res.type('html');
    res.send(buf);
});

app.get('/style.css', async (req, res) => {
    const buf = await fs.readFile('./static/style.css');
    res.type('css');
    res.send(buf);
});

app.listen(3080);
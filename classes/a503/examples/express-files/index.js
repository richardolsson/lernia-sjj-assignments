import express from 'express';
import fs from 'fs/promises';

const app = express();

app.get('/', async (req, res) => {
    const buf = await fs.readFile('./static/index.html');
    res.type('html');
    res.send(buf);
});

app.get('/static/*', async (req, res) => {
    const path = req.path;
    try {
        const buf = await fs.readFile('./' + path);
        const fields = path.split('.');
        res.type(fields.pop());
        res.send(buf);
    } catch (err) {
        res.status(404).end();
    }
});

app.listen(3080);
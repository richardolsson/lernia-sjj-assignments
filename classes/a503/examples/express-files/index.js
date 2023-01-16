import express from 'express';
import fs from 'fs/promises';

const app = express();

app.get('/', async (req, res) => {
    const buf = await fs.readFile('./static/index.html');
    res.type('html');
    res.send(buf);
});

app.get('/:file', async (req, res) => {
    try {
        const buf = await fs.readFile('./static/' + req.params.file);
        const fields = req.params.file.split('.');
        res.type(fields.pop());
        res.send(buf);
    } catch (err) {
        res.status(404).end();
    }
});

app.listen(3080);
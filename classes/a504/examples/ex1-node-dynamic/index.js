import express from 'express';
import fs from 'fs/promises';

const app = express();

app.get('/', async (req, res) => {
    const { firstName } = req.query;
    const buf = await fs.readFile('./static/index.html');
    const html = buf.toString().replace('$%firstName%$', firstName || 'world');
    res.type('html');
    res.send(html);
});

app.use('/static', express.static('./static'));

app.listen(3080);
import express from 'express';
import fs from 'fs/promises';

const app = express();

app.use(express.urlencoded());

async function handleHomePage(req, res) {
    const { firstName } = req.body;
    const buf = await fs.readFile('./static/index.html');
    const html = buf.toString().replace('$%firstName%$', firstName || 'world');
    res.type('html');
    res.send(html);
}

app.get('/', handleHomePage);
app.post('/', handleHomePage);

app.use('/static', express.static('./static'));

app.listen(3080);
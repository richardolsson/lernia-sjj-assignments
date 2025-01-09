import express from 'express';
import fs from 'fs/promises';

const app = express();

app.get('/', async (request, response) => {
  const buf = await fs.readFile('./static/index.html');
  const html = buf.toString();
  response.send(html);
});

app.get('/:name', async (request, response) => {
  const buf = await fs.readFile('./static/index.html');
  const html = buf.toString();
  const name = request.params.name;

  const changedHtml = html.replace('world', name);

  response.send(changedHtml);
});

app.use('/static', express.static('./static'));

app.listen(3080);

/* Manual implementation of static serving
app.get('/*', async (request, response) => {
  try {
    const path = request.path;
    const fileName = `./static${path}`;
    const buf = await fs.readFile(fileName);
    const text = buf.toString();

    const suffix = path.split('.')[1];
    response.setHeader('Content-Type', 'text/' + suffix);
    response.send(text);
  } catch (err) {
    response.status(404);
    response.end();
  }
});
*/

/*
app.get('/index.html', async (request, response) => {
  const buf = await fs.readFile('./static/index.html');
  const html = buf.toString();

  response.send(html);
});

app.get('/style.css', async (request, response) => {
  const buf = await fs.readFile('./static/style.css');
  const css = buf.toString();

  response.setHeader('Content-Type', 'text/css');
  response.send(css);
});
*/
import express from 'express';
import fs from 'fs/promises';

const app = express();

app.get('/', async (request, response) => {
  const buf = await fs.readFile('./static/index.html');
  const html = buf.toString();

  response.send(html);
});

app.get('/richard', async (request, response) => {
   const buf = await fs.readFile('./static/index.html');
   const html = buf.toString();

   const changed = html.replace('world', 'richard');

   response.send(changed);
});

/* Manual implementation
app.get('/*', async (request, response) => {
  const fileName = `./static${request.path}`;
  const buf = await fs.readFile(fileName);

  // Find suffix (e.g. "css" for "main.css")
  const fileElements = request.path.split('.');
  const fileType = fileElements[fileElements.length - 1];

  response.type(fileType);
  response.send(buf);
});
*/

// Express simplified solution
app.use('/', express.static('./static'));

app.listen(3080);
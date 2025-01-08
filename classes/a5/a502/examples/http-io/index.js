import bodyParser from 'body-parser';
import express from 'express';
import { handle } from './io.js';
const app = express();
app.use(bodyParser.text());
app.use(async (req, res) => {
  const result = await handle(
    req.method,
    req.path,
    req.query,
    req.headers,
    req.body
  ) || {};
  if (result.headers) {
    Object.entries(result.headers).forEach(([header, value]) => {
      res.setHeader(header, value);
    });
  }
  res.status(result.status || 404).send(result.body || '');
});
app.listen(3080, () => {
  console.log('==================================');
  console.log('Listening on http://localhost:3080');
  console.log('');
});
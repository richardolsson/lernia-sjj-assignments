import express from 'express';

const app = express();

app.get('/hello', (request, response) => {
  response.send('Hello, world');
});

app.get('/goodbye', (request, response) => {
  response.send('Goodbye, world!');
});

app.listen(5080);
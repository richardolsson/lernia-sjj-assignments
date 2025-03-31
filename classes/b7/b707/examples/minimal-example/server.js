import express from 'express';

const app = express();

app.get('/', (req, res) => {
  res.send('<html><body><script src="/static/main.js"></script></body></html>');
});

app.get('/api/randomNumber', (req, res) => {
  res.json({
    randomNumber: Math.random(),
  });
});

app.use('/static', express.static('static'));

app.listen(5080);
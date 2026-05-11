import express from 'express';

const app = express();

app.get('', (req, res) => {
  res.send('Hello, world!');
});

app.get('/api/hello', (req, res) => {
  res.status(200).json({ message: 'Hello, there' });
});

export default app;
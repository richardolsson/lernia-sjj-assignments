import express from 'express';


const app = express();

const USERNAME = 'admin';
const PASSWORD = 'secret';
const TOKENS = [];

app.post('/api/login', (req, res) => {
  const authHeader = req.headers.authorization;
  const b64credentials = authHeader.slice(6);
  const credentials = atob(b64credentials);
  const [username, password] = credentials.split(':');

  if (username == USERNAME && password == PASSWORD) {
    const randomToken = Math.random().toString();
    TOKENS.push(randomToken);
    res.status(200).json({
      token: randomToken,
    });
  }
});

app.get('/api/protected', (req, res) => {
  const authHeader = req.headers.authorization;

  // Ex: "Bearer 0.123123123"
  const token = authHeader.slice(7);

  if (TOKENS.includes(token)) {
    res.status(200).json({ hello: 'world' });
  } else {
    res.status(401).json({error: 'not allowed' });
  }
});

app.use('/', express.static('./static'));

app.listen(5080);

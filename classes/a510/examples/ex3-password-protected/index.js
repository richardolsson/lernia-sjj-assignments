import express from 'express';
import jsonwebtoken from 'jsonwebtoken';


const app = express();

const USERNAME = 'admin';
const PASSWORD = 'secret';

const TOKEN_SECRET = 'averylongstringthatnoonewillguessshouldhavenumbersandotherstuff';

app.post('/api/login', (req, res) => {
  const authHeader = req.headers.authorization;
  const b64credentials = authHeader.slice(6);
  const credentials = atob(b64credentials);
  const [username, password] = credentials.split(':');

  if (username == USERNAME && password == PASSWORD) {
    // Issue JSON Web Token
    const jwt = jsonwebtoken.sign({
      username: username,
    }, TOKEN_SECRET);

    res.status(200).json({
      token: jwt,
    });
  }
});

app.get('/api/protected', (req, res) => {
  const authHeader = req.headers.authorization;

  const token = authHeader.slice(7);
  const payload = jsonwebtoken.decode(token, TOKEN_SECRET);

  if (payload) {
    res.status(200).json({ hello: payload.username });
  } else {
    res.status(401).json({ error: 'not allowed' });
  }
});

app.use('/', express.static('./static'));

app.listen(5080);

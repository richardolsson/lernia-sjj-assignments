import express from 'express';
import jsonwebtoken from 'jsonwebtoken';

const app = express();

const USERNAME = 'admin';
const PASSWORD = 'secret';
const JWT_SECRET = 'averylongtextstringthatisdifficulttoguess';

app.post('/api/login', (req, res) => {
  const authHeader = req.headers.authorization;
  const b64credentials = authHeader?.slice(6);
  let username, password;

  try {
    const credentials = atob(b64credentials);
    [username, password] = credentials.split(':');
  } catch (err) {
    username = '';
    password = '';
  }

  if (username == USERNAME && password == PASSWORD) {
    const jwt = jsonwebtoken.sign({
      username: username,
      role: 'superuser',
    }, JWT_SECRET);

    res.status(200).json({
      ok: true,
      token: jwt,
    });
  } else {
    res.status(401).json({
      ok: false,
    });
  }
});

app.get('/api/protected', (req, res) => {
  const authHeader = req.headers.authorization;
  const token = authHeader?.slice(7);

  try {
    const payload = jsonwebtoken.verify(token, JWT_SECRET);
    res.status(200).json({
      hello: payload.username,
      someSecretData: 'Oooh how secret',
    });
  } catch (err) {
    res.status(401).json({
      error: 'Not allowed',
    });
  }
});

app.use('/', express.static('./static'));

app.listen(5080);

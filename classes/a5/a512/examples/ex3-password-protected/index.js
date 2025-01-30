import express from 'express';
import jsonwebtoken from 'jsonwebtoken';

const app = express();

const USERNAME = 'admin';
const PASSWORD = 'secret';
const SECRET = 'averylongpasswordthatnoonecanknowaboutexceptthiscode';

app.post('/api/login', (req, res) => {
  const authHeader = req.headers.authorization;
  const b64credentials = authHeader.slice(6);
  const credentials = atob(b64credentials);
  const fields = credentials.split(':');
  const username = fields[0];
  const password = fields[1];

  if (username == USERNAME && password == PASSWORD) {
    const jwt = jsonwebtoken.sign({
      username: username,
      role: 'superuser',
    }, SECRET);

    res.status(200).json({
      ok: true,
      token: jwt,
    });
  } else {
    res.status(401).end();
  }
});

app.get('/api/protected', (req, res) => {
  const authHeader = req.headers.authorization;
  const token = authHeader?.slice(7);

  try {
    const payload = jsonwebtoken.verify(token, SECRET);
    res.status(200).json({
      hello: payload.username,
      someSecretData: 'this is very secret',
    });
  }
  catch (err) {
    res.status(401).json({
      ok: false,
      error: 'Not allowed',
    });
  }
});

app.use('/', express.static('./static'));

app.listen(5080);

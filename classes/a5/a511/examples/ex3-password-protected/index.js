import express from 'express';
import jsonwebtoken from 'jsonwebtoken';

const app = express();

const USERNAME = 'admin';
const PASSWORD = 'secret';
const SECRET = 'averylongpasswordthatnoonecanknowabout';

app.post('/api/login', (req, res) => {
  const authHeader = req.headers.authorization;
  const fields = authHeader.split(' ');
  if (fields[0] == 'Basic') {
    const b64credentials = fields[1];
    const credentials = atob(b64credentials);
    const [username, password] = credentials.split(':');

    if (username == USERNAME && password == PASSWORD) {
      const jwt = jsonwebtoken.sign({
        username: username,
        role: 'superuser',
      }, SECRET);

      res.status(200).send({
        token: jwt,
        ok: true,
      });
    }
  }

  res.status(401).end();
});

app.get('/api/protected', (req, res) => {
  const authHeader = req.headers.authorization;
  const token = authHeader.slice(7);

  try {
    const payload = jsonwebtoken.verify(token, SECRET)
    res.status(200).json({
      ok: true,
      hello: payload.username,
    });
  } catch (err) {
    res.status(401).json({
      ok: false,
      error: 'Bad credentials',
    });
  }
});

app.use('/', express.static('./static'));

app.listen(5080);

import express from 'express';

const app = express();

const USERNAME = 'admin';
const PASSWORD = 'secret';

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
    res.status(200).json({
      ok: true,
    });
  } else {
    res.status(401).json({
      ok: false,
    });
  }
});

app.get('/api/protected', (req, res) => {
});

app.use('/', express.static('./static'));

app.listen(5080);

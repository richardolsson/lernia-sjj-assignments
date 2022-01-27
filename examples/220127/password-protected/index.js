import express from "express";
import JWT from "jsonwebtoken";

const app = express();

function isAuthenticated(req) {
  // This is stupid logic to authenticate a user. Normally this
  // would hit a database or other data source to verify user
  // credentials (username/password)
  const username = [
    'richard',
    'haeju',
  ];

  const password = 'mypass';

  const authStr = atob(req.headers['authorization'].slice(6));
  const reqUsername = authStr.split(':')[0];
  const reqPassword = authStr.split(':')[1];

  if (username.includes(reqUsername) && reqPassword == password) {
    return reqUsername;
  }
  else {
    return null;
  }
}

TOKEN_SECRET = 'thisisapasswordthatwewillnotsharewithanyone';

// Route to verify username and password, and give back a token
app.get("/api/login", (req, res) => {
  const username = isAuthenticated(req);

  if (username) {
    const jwt = JWT.sign({
      username: username,
    }, TOKEN_SECRET);

    res.status(200).json({ token: jwt });
  } else {
    res.status(401).end();
  }
});

app.get("/api/protected", (req, res) => {
  const token = req.headers.authorization.slice(7);
  const payload = JWT.decode(token, TOKEN_SECRET);

  if (payload) {
    res.status(200).send('This is secret ' + payload.username);
  } else {
    res.status(401).end();
  }
});

app.get("/api/supersecure", (req, res) => {
  if (req.headers.authorization == 'Bearer VerySecretToken') {
    res.status(200).send('This is omg so secret');
  } else {
    res.status(401).end();
  }
});

app.listen(6080);

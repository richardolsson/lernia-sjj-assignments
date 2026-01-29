import express from 'express';

const app = express();

const USERNAME = 'admin';
const PASSWORD = 'secret';

app.post('/api/login', (req, res) => {
});

app.get('/api/protected', (req, res) => {
});

app.use('/', express.static('./static'));

app.listen(5080);

import express from 'express';
import fs from 'fs/promises';

const app = express();


app.use('/', express.static('./static'));

app.listen(5080);
const express = require('express');
const app = express();
app.use('/assets', express.static('./'));
app.listen('5080');

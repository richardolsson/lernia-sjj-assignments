import express from "express";

const app = express();

app.get('/hello', (request, response) => {
    response.send('Hello, world!');
});

app.use('/hello', (request, response) => {
    response.status(405).end();
});

app.get('/bye', (request, response) => {
    response.send('Goodbye, world');
});

app.listen(3080);
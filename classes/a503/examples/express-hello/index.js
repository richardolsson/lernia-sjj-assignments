import express from "express";

const app = express();

app.get('/hello', (request, response) => {
    response.send('Hello, world!');
});

app.get('/bye', (request, response) => {
    response.send('Goodbye, world');
});

/*
// Handle 405 cases with reused handler
function handleUnknownMethod(req, res) {
    res.status(405).end();
}

app.use('/bye', handleUnknownMethod);
app.use('/hello', handleUnknownMethod);

// Handle 405 cases with array of paths
app.use(['/hello', '/bye'], (req, res) => {
    res.status(405).end();
});
*/

// Handle 405 cases with "regular expressions"
app.use(/\/(hello|bye)/, (req, res) => {
    res.status(405).end();
});

app.listen(3080);
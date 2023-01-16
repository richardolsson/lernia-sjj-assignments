import http from "http";

const server = http.createServer((request, response) => {
    if (request.method === 'GET') {
        response.statusCode = 200;
        response.write("Hello, world");
        response.end();
    } else {
        response.statusCode = 405;
        response.end();
    }
});

server.listen(3080);
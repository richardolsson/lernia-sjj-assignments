import http from "http";

const server = http.createServer((request, response) => {
    if (request.method === 'GET') {
        if (request.url == '/hello') {
            response.statusCode = 200;
            response.write("Hello, world");
        } else if (request.url == '/bye') {
            response.statusCode = 200;
            response.write("Goodbye, world");
        } else {
            response.statusCode = 404;
        }
    } else {
        response.statusCode = 405;
    }

    response.end();
});

server.listen(3080);
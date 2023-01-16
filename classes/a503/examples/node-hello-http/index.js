import http from "http";

const server = http.createServer((request, response) => {
    response.statusCode = 200;
    response.write("Hello, world");
    response.end();
});

server.listen(3080);
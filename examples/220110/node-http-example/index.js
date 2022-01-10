import http from "http";

const server = http.createServer((request, response) => {
  response.statusCode = 200;

  if (request.url == "/hello") {
    response.write("Hello, world!");
  } else if (request.url == "/goodbye") {
    response.write("Goodbye, world!");
  }

  response.end();
});
server.listen(5080);

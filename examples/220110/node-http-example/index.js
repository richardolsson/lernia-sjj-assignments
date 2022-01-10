import http from "http";

const server = http.createServer((request, response) => {
  response.statusCode = 200;

  if (request.url == "/hello") {
    if (request.method == 'GET') {
      response.write("Hello, world!");
    }
    else {
      response.statusCode = 405;
    }
  } else if (request.url == "/goodbye") {
    response.write("Goodbye, world!");
  } else {
    response.statusCode = 404;
  }

  response.end();
});
server.listen(5080);

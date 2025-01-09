import http from 'http';

function handleRequest(request, response) {
  console.log(request.method, request.url);

  if (request.method == 'GET') {
    if (request.url == '/hello') {
      response.statusCode = 200;
      response.write('Hello, world!');
    } else if (request.url == '/goodbye') {
      response.statusCode = 200;
      response.write('Goodbye, world!');
    } else {
      response.statusCode = 404;
    }
  } else {
    response.statusCode = 405;
  }

  response.end();
}

const server = http.createServer(handleRequest);

server.listen(3080);
import http from 'http';

function handleRequest(request, response) {
  console.log(request.method, request.url);

  response.statusCode = 200;
  response.write('Hello');
  response.end();
}

const server = http.createServer(handleRequest);

server.listen(5080);
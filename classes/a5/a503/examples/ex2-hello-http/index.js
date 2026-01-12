import http from 'http';

function handleRequest(request, response) {
  console.log(request.method, request.url);


  if (request.url == '/hello') {
    response.statusCode = 200;
    response.write('Hello, world!');
  } else if (request.url == '/goodbye') {
    response.statusCode = 200;
    response.write('Goodbye, world!');
  } else {
    response.statusCode = 404;
  }

  response.end();
}

const server = http.createServer(handleRequest);

server.listen(5080);
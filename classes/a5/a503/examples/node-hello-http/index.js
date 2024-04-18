import http from 'http';

function requestListener(request, response) {
  console.log(request.method, request.url);
  if (request.method == 'GET') {
    if (request.url == '/hello') {
      response.statusCode = 200;
      response.write('Hello, world');
    } else if (request.url == '/goodbye') {
      response.statusCode = 200;
      response.write('Goodbye, world!');
    }
  }

  response.end();
}

const server = http.createServer(requestListener);

server.listen(3080);
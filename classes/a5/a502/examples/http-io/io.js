export async function handle(method, path, queryString, headers, body) {
  console.log('');
  console.log('= REQUEST =====================');
  console.log('method:  ', method);
  console.log('path:    ', path);
  console.log('query:   ', queryString);
  console.log('headers: ', headers);
  console.log('body:    ', body);

  if (method == 'GET') {
    if (path == '/hello') {
      return {
        status: 200,
        body: '<html><body><h1>Hello, world!</h1><a href="/goodbye">Goodbye</a></body></html>',
      }
    } else if (path == '/goodbye') {
      return {
        status: 200,
        body: '<html><body><h1>Goodbye, world!</h1></body></html>',
      }
    } else {
      return {
        status: 404,
        body: 'This does not exist',
        headers: {
          'Content-Type': 'text/plain'
        }
      }
    }
  }
}
export async function handle(
  method,
  path,
  queryString,
  headers,
  body
) {
  console.log('');
  console.log('= REQUEST =====================');
  console.log('METHOD', method);
  console.log('PATH', path);
  console.log('QS', queryString);
  console.log('HEADERS', headers);
  console.log('BODY', body);

  if (headers.authorization == 'mypassword') {
    if (path == '/hello') {
      return {
        body: '<html><body><h1>Hello, world!</h1></body></html>',
        status: 200,
      };
    } else if (path == '/goodbye') {
      return {
        body: '<html><body><h1>Goodbye, world!</h1></body></html>',
        status: 200,
      };
    } else {
      return {
        status: 404,
      };
    }
  } else {
    return {
      body: '<html><body><h1>ACCESS DENIED!</h1></body></html>',
      status: 403,
    };
  }
}

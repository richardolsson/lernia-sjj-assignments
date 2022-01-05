
export async function handle(method, path, queryString, headers, body) {
  console.log('==================================');
  console.log('method:  ', method);
  console.log('path:    ', path);
  console.log('query:   ', queryString);
  console.log('headers: ', headers);
  console.log('body:    ', body);

  if (headers.authorization == 'verysecret') {
    if (path == '/hello') {
      return {
        status: 200,
        body: 'Hello, world!',
      };
    }
    else if (path == '/bye') {
      return {
        status: 200,
        body: 'Goodbye!',
      };
    }
  }
  else {
    return {
      status: 401,
      body: 'Keep out!',
    };
  }
}

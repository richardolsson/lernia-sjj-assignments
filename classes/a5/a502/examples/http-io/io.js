export async function handle(method, path, queryString, headers, body) {
  console.log('');
  console.log('= REQUEST =====================');
  console.log('method:  ', method);
  console.log('path:    ', path);
  console.log('query:   ', queryString);
  console.log('headers: ', headers);
  console.log('body:    ', body);

  if (path == '/') {
    return {
      status: 200,
      body: createHtml('<h1>Hello, world!</h1><a href="/goodbye">Goodbye</a></body>')
    };
  } else if (path == '/goodbye') {
    return {
      status: 200,
      body: createHtml('<h1>Goodbye, world!</h1><a href="/">Hello</a></body>')
    }
  } else if (path == '/style.css') {
    return {
      status: 200,
      body: 'h1 { color: red; }',
    }
  } else {
    return {
      status: 404,
      body: createHtml('<h1>Not found!</h1>')
    }
  }
}

function createHtml(bodyContent) {
  return `<html>
    <head><link rel="stylesheet" type="text/css" href="/style.css"></head>
    <body>${bodyContent}</body>
  </html>`;
}
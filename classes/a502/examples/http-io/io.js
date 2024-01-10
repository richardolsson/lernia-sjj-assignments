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
}

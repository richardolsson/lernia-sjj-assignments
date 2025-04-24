import { Client } from 'pg';

/*
  - postgres (scheme, what protocol to use)
  - ://
  - postgres (username)
  - :
  - password (password)
  - @
  - IP/host (what server to connect to)
  - :
  - port (what port to connect on)
*/
const client = new Client('postgres://postgres:password@127.0.0.1:5432');
await client.connect();

const result = await client.query('SELECT * FROM inhabitants');

result.rows.forEach((row) => {
  console.log(`${row.name} is ${row.age} years old`);
});

await client.end();
import { Client } from 'pg';

const client = new Client('postgres://postgres@127.0.0.1:5432');
await client.connect();

const result = await client.query('SELECT * FROM persons');

result.rows.forEach(row => {
  console.log(`Hello, ${row.name}`);
});

client.end();
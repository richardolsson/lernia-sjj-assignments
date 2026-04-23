import fs from 'fs/promises';
import express from 'express';

import { Pool } from 'pg';

const pool = new Pool({
  user: 'postgres',
  password: process.env.POSTGRES_PASSWORD,
  host: 'dbservice',
});

await pool.query(`
  CREATE TABLE IF NOT EXISTS tasks (
    id SERIAL PRIMARY KEY,
    label TEXT NOT NULL,
    completed BOOLEAN NOT NULL
  )
`);

const app = express();

app.use(express.json());

app.get('/api/tasks', async (req, res) => {
  const result = await pool.query('SELECT * FROM tasks');
  res.json(result.rows);
});

app.post('/api/tasks', async (req, res) => {
  const sql = 'INSERT INTO tasks (label, completed) VALUES($1, $2)';
  console.log(sql);
  await pool.query(sql, [req.body.label, req.body.completed]);
  res.status(201).json({});
});

app.get('/', async (req, res) => {
  const htmlBuffer = await fs.readFile('../frontend/dist/index.html');
  res.send(htmlBuffer.toString());
});

app.use('/assets', express.static('../frontend/dist/assets'));

app.listen(5080);
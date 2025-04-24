import fs from 'fs/promises';
import express from 'express';
import { Pool } from 'pg';

const pool = new Pool({
  user: 'postgres',
  password: 'password',
});

try {
  await pool.query(`
    CREATE TABLE IF NOT EXISTS tasks (
      id SERIAL PRIMARY KEY,
      label TEXT NOT NULL,
      completed BOOLEAN NOT NULL
    )`
  );
} catch (err) {
  console.log('No database. Make sure to run postgres');
}

const app = express();

app.use(express.json());

app.use((req, res, next) => {
  console.log(req.method, req.url);
  next();
});

app.get('/api/tasks', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM tasks');
    res.json({
      data: result.rows
    });
  } catch (err) {
    res.status(500).end();
  }
});

app.post('/api/tasks', async (req, res) => {
  try {
    const sql = `INSERT INTO tasks(label, completed)
      VALUES ($1::text, false) RETURNING id`;

    console.log(sql);
    const result = await pool.query(sql, [req.body.label]);
    const newTask = {
      id: result.rows[0].id,
      label: req.body.label,
      completed: false,
    };

    res.status(201).json({ data: newTask });
  } catch (err) {
    console.log(err);
    res.status(500).end();
  }
});

app.get('/', async (req, res) => {
  const htmlText = await fs.readFile('../frontend/dist/index.html');
  res.send(htmlText.toString());
});

app.use('/assets', express.static('../frontend/dist/assets'));

app.listen(5080);
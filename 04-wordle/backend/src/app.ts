import express from 'express';
import { IDbAdapter } from './db/types';

export default function initApp(dbAdapter: IDbAdapter | null = null) {
  if (!dbAdapter) {
    throw new Error('Cant work without db adapter');
  }

  const app = express();

  app.get('/', (req, res) => {
    res.send('Hello, world!');
  });

  return app;
}

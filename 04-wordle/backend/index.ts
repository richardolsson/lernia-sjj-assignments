import fs from 'fs/promises';
import initApp from './src/app';
import PostgresDbAdapter from './src/db/PostgresDbAdapter';

(async () => {
  const wordsBuffer = await fs.readFile('./words.txt');
  const words = wordsBuffer.toString().split('\r\n');

  const dbAdapter = new PostgresDbAdapter({
    user: 'postgres',
    password: 'password',
  });

  await dbAdapter.init();

  const app = initApp(dbAdapter, words);

  app.listen(5080);
})();

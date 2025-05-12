import initApp from './src/app';
import PostgresDbAdapter from './src/db/PostgresDbAdapter';

(async () => {
  const dbAdapter = new PostgresDbAdapter({
    user: 'postgres',
    password: 'password',
  });

  await dbAdapter.init();

  const app = initApp(dbAdapter);

  app.listen(5080);
})();

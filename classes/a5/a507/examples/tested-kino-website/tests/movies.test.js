import { expect, test } from '@jest/globals';
import request from 'supertest';

import initApp from '../src/app.js';

test('Home page shows list of movies', async () => {
  const app = initApp({
    loadMovie: async () => ({
      id: 1,
      title: 'Encanto',
      // ...
    }),
    loadMovies: async () => [
      {
        id: 1,
        title: 'Encanto',
      },
      {
        id: 2,
        title: 'Forrest Gump',
      },
      {
        id: 3,
        title: 'Training Day',
      }
    ],
  });
  const response = await request(app)
    .get('/')
    .expect('Content-Type', /html/)
    .expect(200);

  expect(response.text).toMatch('Encanto');
  expect(response.text).toMatch('Forrest Gump');
  expect(response.text).toMatch('Training Day');
});
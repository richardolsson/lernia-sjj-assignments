import { expect, test } from '@jest/globals';
import request from 'supertest';

import { loadMovie, loadMovies } from '../src/movies.js';
import initApp from '../src/app.js';

test('Home page shows list of movies', async () => {
  const app = initApp({
    loadMovie,
    loadMovies,
  });
  const response = await request(app)
    .get('/')
    .expect('Content-Type', /html/)
    .expect(200);

  expect(response.text).toMatch('Encanto');
  expect(response.text).toMatch('Forrest Gump');
  expect(response.text).toMatch('Training Day');
});
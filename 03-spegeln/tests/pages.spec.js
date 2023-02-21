import request from 'supertest';
import CMSAdapter from '../src/adapters/CMSAdapter.js';

import initApp from '../src/app.js';

const cms = new CMSAdapter();
const app = initApp(cms);

test('home page shows list of movies', async () => {
  const response = await request(app)
    .get('/')
    .expect('Content-Type', 'text/html; charset=utf-8')
    .expect(200);

  expect(response.text.includes('Shawshank')).toBeTruthy();
});

test('Encanto page returns Encanto info', async () => {
  const response = await request(app)
    .get('/movies/2')
    .expect('Content-Type', 'text/html; charset=utf-8')
    .expect(200);

  expect(response.text.includes('Encanto')).toBeTruthy();
  expect(response.text.includes('Shawshank')).toBeFalsy();
});

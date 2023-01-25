import request from 'supertest';

import app from '../src/app.js';

test('home page shows list of movies', async () => {
  const response = await request(app)
    .get('/')
    .expect('Content-Type', 'text/html; charset=utf-8')
    .expect(200);

  expect(response.text.includes('Shawshank')).toBeTruthy();
});
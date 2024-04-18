import request from 'supertest';

import app from '../src/app.js';

test('home page shows list of movies', async () => {
  const response = await request(app)
    .get('/')
    .expect(200);

  expect(response.text.includes('Shawshank')).toBeTruthy();
  expect(response.text.includes('Godfather')).toBeTruthy();
});

test('movie page shows movie details', async () => {
  const response = await request(app)
    .get('/movies/1')
    .expect(200);

  expect(response.text.includes('Shawshank')).toBeTruthy();
});

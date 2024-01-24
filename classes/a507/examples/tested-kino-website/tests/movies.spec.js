import { expect, test } from '@jest/globals';
import request from 'supertest';
import app from '../src/app';

test('Encanto page shows title of movie', async () => {
  const response = await request(app).get('/movies/2')
    .expect('Content-Type', 'text/html; charset=utf-8')
    .expect(200);

  expect(response.text).toMatch('Encanto');
});
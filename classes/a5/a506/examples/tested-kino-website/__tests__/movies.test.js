import { describe, expect, test } from '@jest/globals';
import request from 'supertest';
import { app } from '../src/app.js';

describe('Movie list page', () => {
  test('lists movies from API', async () => {
    const response = await request(app)
      .get('/')
      .expect('Content-Type', /html/)
      .expect(200);

    expect(response.text).toContain('Encanto');
    expect(response.text).toContain('The Godfather');
  });
});
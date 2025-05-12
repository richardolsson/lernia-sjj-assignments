import request from 'supertest';
import { describe, it, expect } from '@jest/globals';
import initApp from '../../src/app';
import { IDbAdapter } from '../../src/db/types';

describe('POST /api/games/:id/highscore', () => {
  it('Returns 404 for missing game', async () => {
    const dbAdapter: jest.Mocked<IDbAdapter> = {
      createGame: jest.fn(),
      endGame: jest.fn(),
      findGame: jest.fn().mockResolvedValue(null),
      submitGuess: jest.fn(),
      submitHighscore: jest.fn(),
    };

    const app = initApp(dbAdapter, []);

    await request(app)
      .post('/api/games/1/highscore')
      .send({ name: 'Player' })
      .expect(404);
  });

  it('Returns 409 for on-going game', async () => {
    const startTime = new Date().toISOString();

    const dbAdapter: jest.Mocked<IDbAdapter> = {
      createGame: jest.fn(),
      endGame: jest.fn(),
      findGame: jest.fn().mockResolvedValue({
        id: 1,
        config: {
          wordLength: 5,
          allowRepeat: true,
        },
        correctWord: 'FRANK',
        startTime,
        endTime: null,
      }),
      submitGuess: jest.fn(),
      submitHighscore: jest.fn(),
    };

    const app = initApp(dbAdapter, []);

    await request(app)
      .post('/api/games/1/highscore')
      .send({ name: 'Player' })
      .expect(409);
  });

  it('Creates highscore in database', async () => {
    const startTime = new Date().toISOString();
    const endTime = new Date().toISOString();

    const dbAdapter: jest.Mocked<IDbAdapter> = {
      createGame: jest.fn(),
      endGame: jest.fn(),
      findGame: jest.fn().mockResolvedValue({
        id: 1,
        config: {
          wordLength: 5,
          allowRepeat: true,
        },
        correctWord: 'FRANK',
        startTime,
        endTime,
      }),
      submitGuess: jest.fn(),
      submitHighscore: jest.fn(),
    };

    const app = initApp(dbAdapter, []);

    const response = await request(app)
      .post('/api/games/1/highscore')
      .send({ name: 'Player' })
      .expect(201)
      .expect('Content-Type', /json/);

    expect(response.body).toEqual({
      name: 'Player',
      game: {
        id: 1,
        config: {
          wordLength: 5,
          allowRepeat: true,
        },
        correctWord: 'FRANK',
        startTime,
        endTime,
      },
    });

    expect(dbAdapter.submitHighscore).toHaveBeenCalledWith(1, 'Player');
  });
});

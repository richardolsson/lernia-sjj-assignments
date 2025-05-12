import request from 'supertest';
import { describe, it, expect } from '@jest/globals';
import initApp from '../../src/app';
import { IDbAdapter } from '../../src/db/types';

describe('POST /api/games', () => {
  it('Creates game for valid input', async () => {
    const startTime = new Date().toISOString();
    const dbAdapter: jest.Mocked<IDbAdapter> = {
      createGame: jest.fn().mockResolvedValue({
        id: 1,
        config: {
          wordLength: 5,
          allowRepeat: false,
        },
        correctWord: 'FRANK',
        startTime: startTime,
        endTime: null,
      }),
      findGame: jest.fn(),
      submitGuess: jest.fn(),
      submitHighscore: jest.fn(),
    };

    const app = initApp(dbAdapter, ['FRANK']);

    const response = await request(app)
      .post('/api/games')
      .send({ wordLength: 5, allowRepeat: false })
      .expect(201)
      .expect('Content-Type', /json/);

    expect(response.body).toEqual({
      id: 1,
      config: {
        wordLength: 5,
        allowRepeat: false,
      },
      startTime: startTime,
      endTime: null,
    });

    expect(dbAdapter.createGame).toBeCalledWith({
      config: {
        wordLength: 5,
        allowRepeat: false,
      },
      correctWord: 'FRANK',
    });
  });

  it('responds with 409 when there is no matching word', async () => {
    const dbAdapter: jest.Mocked<IDbAdapter> = {
      createGame: jest.fn(),
      findGame: jest.fn(),
      submitGuess: jest.fn(),
      submitHighscore: jest.fn(),
    };

    const app = initApp(dbAdapter, ['FRANK']);

    await request(app)
      .post('/api/games')
      .send({ wordLength: 4, allowRepeat: false })
      .expect(409);
  });
});

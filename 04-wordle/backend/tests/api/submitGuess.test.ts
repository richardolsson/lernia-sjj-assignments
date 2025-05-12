import request from 'supertest';
import { describe, it, expect } from '@jest/globals';
import initApp from '../../src/app';
import { IDbAdapter } from '../../src/db/types';

describe('POST /api/games/:id/guesses', () => {
  it('returns 404 for missing game', async () => {
    const dbAdapter: jest.Mocked<IDbAdapter> = {
      createGame: jest.fn(),
      findGame: jest.fn().mockResolvedValue(null),
      submitGuess: jest.fn(),
      submitHighscore: jest.fn(),
    };

    const app = initApp(dbAdapter, []);

    await request(app)
      .post('/api/games/1/guesses')
      .send({ guess: 'FRANK' })
      .expect(404);
  });

  it('returns 400 for guess with wrong length', async () => {
    const dbAdapter: jest.Mocked<IDbAdapter> = {
      createGame: jest.fn(),
      findGame: jest.fn().mockResolvedValue({
        id: 1,
        config: {
          wordLength: 5,
          allowRepeat: false,
        },
        correctWord: 'FRANK',
      }),
      submitGuess: jest.fn(),
      submitHighscore: jest.fn(),
    };

    const app = initApp(dbAdapter, []);

    await request(app)
      .post('/api/games/1/guesses')
      .send({ guess: 'ABC' })
      .expect(400);
  });

  it('saves guess to database', async () => {
    const dbAdapter: jest.Mocked<IDbAdapter> = {
      createGame: jest.fn(),
      findGame: jest.fn().mockResolvedValue({
        id: 1,
        config: {
          wordLength: 5,
          allowRepeat: false,
        },
        correctWord: 'FRANK',
      }),
      submitGuess: jest.fn(),
      submitHighscore: jest.fn(),
    };

    const app = initApp(dbAdapter, []);

    await request(app)
      .post('/api/games/1/guesses')
      .send({ guess: 'HELLO' })
      .expect(201);

    expect(dbAdapter.submitGuess).toHaveBeenCalledWith(1, 'HELLO');
  });

  it('returns feedback for incorrect guess', async () => {
    const startTime = new Date().toISOString();
    const dbAdapter: jest.Mocked<IDbAdapter> = {
      createGame: jest.fn(),
      findGame: jest.fn().mockResolvedValue({
        id: 1,
        config: {
          wordLength: 5,
          allowRepeat: false,
        },
        correctWord: 'FRANK',
        startTime: startTime,
        endTime: null,
      }),
      submitGuess: jest.fn(),
      submitHighscore: jest.fn(),
    };

    const app = initApp(dbAdapter, []);

    const response = await request(app)
      .post('/api/games/1/guesses')
      .send({ guess: 'CARES' })
      .expect(201)
      .expect('Content-Type', /json/);

    expect(response.body).toEqual({
      game: {
        id: 1,
        config: {
          wordLength: 5,
          allowRepeat: false,
        },
        startTime: startTime,
        endTime: null,
      },
      guess: {
        correct: false,
        letters: [
          { letter: 'C', result: 'incorrect' },
          { letter: 'A', result: 'misplaced' },
          { letter: 'R', result: 'misplaced' },
          { letter: 'E', result: 'incorrect' },
          { letter: 'S', result: 'incorrect' },
        ],
      },
    });
  });

  it('returns feedback for correct guess', async () => {
    const startTime = new Date().toISOString();
    const dbAdapter: jest.Mocked<IDbAdapter> = {
      createGame: jest.fn(),
      findGame: jest.fn().mockResolvedValue({
        id: 1,
        config: {
          wordLength: 5,
          allowRepeat: false,
        },
        correctWord: 'FRANK',
        startTime: startTime,
        endTime: null,
      }),
      submitGuess: jest.fn(),
      submitHighscore: jest.fn(),
    };

    const app = initApp(dbAdapter, []);

    const response = await request(app)
      .post('/api/games/1/guesses')
      .send({ guess: 'FRANK' })
      .expect(201)
      .expect('Content-Type', /json/);

    expect(response.body).toEqual({
      game: {
        id: 1,
        config: {
          wordLength: 5,
          allowRepeat: false,
        },
        startTime: startTime,
        endTime: null,
      },
      guess: {
        correct: true,
        letters: [
          { letter: 'F', result: 'correct' },
          { letter: 'R', result: 'correct' },
          { letter: 'A', result: 'correct' },
          { letter: 'N', result: 'correct' },
          { letter: 'K', result: 'correct' },
        ],
      },
    });
  });
});

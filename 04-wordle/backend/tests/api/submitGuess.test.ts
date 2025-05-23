import request from 'supertest';
import { describe, it, expect } from '@jest/globals';
import initApp from '../../src/app';
import { IDbAdapter } from '../../src/db/types';

describe('POST /api/games/:id/guesses', () => {
  it('returns 404 for missing game', async () => {
    const dbAdapter: jest.Mocked<IDbAdapter> = {
      endGame: jest.fn(),
      createGame: jest.fn(),
      findGame: jest.fn().mockResolvedValue(null),
      listHighscores: jest.fn(),
      submitGuess: jest.fn(),
      submitHighscore: jest.fn(),
    };

    const app = initApp(dbAdapter, []);

    await request(app)
      .post('/api/games/1/guesses')
      .send({ guess: 'FRANK' })
      .expect(404);
  });

  it('returns 404 for game that ended', async () => {
    const dbAdapter: jest.Mocked<IDbAdapter> = {
      endGame: jest.fn(),
      createGame: jest.fn(),
      findGame: jest.fn().mockResolvedValue({
        id: 1,
        config: {
          wordLength: 5,
          allowRepeat: false,
        },
        correctWord: 'FRANK',
        startTime: new Date().toISOString(),
        endTime: new Date().toISOString(),
      }),
      listHighscores: jest.fn(),
      submitGuess: jest.fn(),
      submitHighscore: jest.fn(),
    };

    const app = initApp(dbAdapter, []);

    await request(app)
      .post('/api/games/1/guesses')
      .send({ guess: 'ABC' })
      .expect(404);
  });

  it('returns 400 for guess with wrong length', async () => {
    const dbAdapter: jest.Mocked<IDbAdapter> = {
      endGame: jest.fn(),
      createGame: jest.fn(),
      findGame: jest.fn().mockResolvedValue({
        id: 1,
        config: {
          wordLength: 5,
          allowRepeat: false,
        },
        correctWord: 'FRANK',
      }),
      listHighscores: jest.fn(),
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
      endGame: jest.fn(),
      createGame: jest.fn(),
      findGame: jest.fn().mockResolvedValue({
        id: 1,
        config: {
          wordLength: 5,
          allowRepeat: false,
        },
        correctWord: 'FRANK',
      }),
      listHighscores: jest.fn(),
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
      endGame: jest.fn(),
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
      listHighscores: jest.fn(),
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
    const endTime = new Date().toISOString();
    const dbAdapter: jest.Mocked<IDbAdapter> = {
      endGame: jest.fn().mockResolvedValue({
        id: 1,
        config: {
          wordLength: 5,
          allowRepeat: false,
        },
        correctWord: 'FRANK',
        startTime: startTime,
        endTime: endTime,
      }),
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
      listHighscores: jest.fn(),
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
        endTime: endTime,
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

  it('ends game after correct guess', async () => {
    const startTime = new Date().toISOString();
    const dbAdapter: jest.Mocked<IDbAdapter> = {
      endGame: jest.fn().mockResolvedValue({
        id: 1,
        config: {
          wordLength: 5,
          allowRepeat: false,
        },
        correctWord: 'FRANK',
        startTime: startTime,
        endTime: new Date().toISOString(),
      }),
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
      listHighscores: jest.fn(),
      submitGuess: jest.fn(),
      submitHighscore: jest.fn(),
    };

    const app = initApp(dbAdapter, []);

    await request(app)
      .post('/api/games/1/guesses')
      .send({ guess: 'FRANK' })
      .expect(201)
      .expect('Content-Type', /json/);

    expect(dbAdapter.endGame).toHaveBeenCalledWith(1);
  });
});

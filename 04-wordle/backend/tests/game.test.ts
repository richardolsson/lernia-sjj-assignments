import request from 'supertest';
import { describe, it, expect } from '@jest/globals';
import initApp from '../src/app';
import { GameInfo, IDbAdapter } from '../src/db/types';

describe('Game API', () => {
  it('handles full game', async () => {
    const startTime = new Date().toISOString();
    const mockGame: GameInfo = {
      id: 1,
      config: {
        wordLength: 5,
        allowRepeat: false,
      },
      correctWord: 'FRANK',
      startTime: startTime,
      endTime: null,
    };

    const dbAdapter: jest.Mocked<IDbAdapter> = {
      endGame: jest.fn().mockImplementation(() => {
        mockGame.endTime = new Date().toISOString();
        return mockGame;
      }),
      createGame: jest.fn().mockResolvedValue(mockGame),
      findGame: jest.fn().mockImplementation(() => mockGame),
      submitGuess: jest.fn(),
      submitHighscore: jest.fn().mockResolvedValue(11),
    };

    const app = initApp(dbAdapter, ['FRANK']);

    const startResponse = await request(app)
      .post('/api/games')
      .send({ wordLength: 5, allowRepeat: false })
      .expect(201)
      .expect('Content-Type', /json/);

    expect(startResponse.body).toEqual({
      id: 1,
      config: {
        wordLength: 5,
        allowRepeat: false,
      },
      startTime: startTime,
      endTime: null,
    });

    expect(dbAdapter.createGame).toHaveBeenCalledWith({
      config: {
        wordLength: 5,
        allowRepeat: false,
      },
      correctWord: 'FRANK',
    });

    const guessResponse1 = await request(app)
      .post('/api/games/1/guesses')
      .send({ guess: 'HELLO' })
      .expect(201)
      .expect('Content-Type', /json/);

    expect(guessResponse1.body).toEqual({
      game: {
        config: {
          allowRepeat: false,
          wordLength: 5,
        },
        endTime: null,
        startTime: startTime,
        id: 1,
      },
      guess: {
        correct: false,
        letters: [
          { letter: 'H', result: 'incorrect' },
          { letter: 'E', result: 'incorrect' },
          { letter: 'L', result: 'incorrect' },
          { letter: 'L', result: 'incorrect' },
          { letter: 'O', result: 'incorrect' },
        ],
      },
    });

    const guessResponse2 = await request(app)
      .post('/api/games/1/guesses')
      .send({ guess: 'CARES' })
      .expect(201)
      .expect('Content-Type', /json/);

    expect(guessResponse2.body).toEqual({
      game: {
        id: 1,
        config: {
          allowRepeat: false,
          wordLength: 5,
        },
        endTime: null,
        startTime: startTime,
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

    const guessResponse3 = await request(app)
      .post('/api/games/1/guesses')
      .send({ guess: 'FRANK' })
      .expect(201)
      .expect('Content-Type', /json/);

    expect(guessResponse3.body).toEqual({
      game: {
        id: 1,
        config: {
          allowRepeat: false,
          wordLength: 5,
        },
        endTime: mockGame.endTime,
        startTime: startTime,
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

    expect(dbAdapter.submitGuess).toHaveBeenCalledTimes(3);
    expect(dbAdapter.submitGuess).toHaveBeenNthCalledWith(1, 1, 'HELLO');
    expect(dbAdapter.submitGuess).toHaveBeenNthCalledWith(2, 1, 'CARES');
    expect(dbAdapter.submitGuess).toHaveBeenNthCalledWith(3, 1, 'FRANK');

    const highscoreResponse = await request(app)
      .post('/api/games/1/highscore')
      .send({ name: 'Player' })
      .expect(201)
      .expect('Content-Type', /json/);

    expect(highscoreResponse.body).toEqual({
      id: 11,
      name: 'Player',
      game: mockGame,
    });

    expect(dbAdapter.submitHighscore).toHaveBeenCalledWith(1, 'Player');
  });
});

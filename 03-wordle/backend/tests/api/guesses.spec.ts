import initApp from '../../src/app';
import request from 'supertest';
import { IGameStore } from '../../src/game/types';

describe('Guess API', () => {
  it('returns feedback for incorrect word', async () => {
    const gameStore: jest.Mocked<IGameStore> = {
      createGame: jest.fn(),
      findGameById: jest.fn().mockReturnValue({
        id: 'abc123',
        correctWord: 'cycle',
        allowDuplicates: true,
        wordLength: 5,
      }),
    };

    const app = initApp(gameStore);

    const result = await request(app)
      .post('/api/games/abc123/guesses')
      .send({
        guess: 'hello',
      })
      .set('Content-Type', 'application/json')
      .expect(200);

    expect(result.body).toEqual({
      feedback: [
        { letter: 'h', result: 'incorrect' },
        { letter: 'e', result: 'misplaced' },
        { letter: 'l', result: 'incorrect' },
        { letter: 'l', result: 'correct' },
        { letter: 'o', result: 'incorrect' },
      ],
      result: null,
    });
  });

  it('returns result when word is correct', async () => {
    const gameStore: jest.Mocked<IGameStore> = {
      createGame: jest.fn(),
      findGameById: jest.fn().mockReturnValue({
        id: 'abc123',
        correctWord: 'cycle',
        allowDuplicates: true,
        wordLength: 5,
      }),
    };

    const app = initApp(gameStore);

    const result = await request(app)
      .post('/api/games/abc123/guesses')
      .send({
        guess: 'cycle',
      })
      .set('Content-Type', 'application/json')
      .expect(200);

    expect(result.body).toMatchObject({
      feedback: [
        { letter: 'c', result: 'correct' },
        { letter: 'y', result: 'correct' },
        { letter: 'c', result: 'correct' },
        { letter: 'l', result: 'correct' },
        { letter: 'e', result: 'correct' },
      ],
      result: {
        guessCount: 1,
        correctWord: 'cycle',
      },
    });

    expect(typeof result.body.result.duration == 'number').toBeTruthy();
  });

  it('returns 404 when using nonexistent game', async () => {
    const gameStore: jest.Mocked<IGameStore> = {
      createGame: jest.fn(),
      findGameById: jest.fn().mockReturnValue(null),
    };

    const app = initApp(gameStore);

    await request(app)
      .post('/api/games/abc123/guesses')
      .send({
        guess: 'hello',
      })
      .set('Content-Type', 'application/json')
      .expect(404);
  });

  it('returns 400 when guess is missing', async () => {
    const gameStore: jest.Mocked<IGameStore> = {
      createGame: jest.fn(),
      findGameById: jest.fn(),
    };

    const app = initApp(gameStore);

    await request(app).post('/api/games/abc123/guesses').expect(400);
  });
});

import initApp from '../../src/app';
import request from 'supertest';
import { IGameStore, IWordRandomizer } from '../../src/game/types';
import MemGameStore from '../../src/game/MemGameStore';
import { IDbAdapter } from '../../src/db/types';

describe('Guess API', () => {
  const db: jest.Mocked<IDbAdapter> = {
    saveHighscore: jest.fn(),
  };

  afterEach(() => {
    jest.clearAllTimers();
  });

  it('returns feedback for incorrect word', async () => {
    const gameStore: jest.Mocked<IGameStore> = {
      createGame: jest.fn(),
      findGameById: jest.fn().mockReturnValue({
        id: 'abc123',
        correctWord: 'cycle',
        allowDuplicates: true,
        wordLength: 5,
        startTime: new Date(),
        guesses: [],
      }),
    };

    const app = initApp(gameStore, db);

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
        startTime: new Date(),
        guesses: [],
      }),
    };

    const app = initApp(gameStore, db);

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

  it('returns correct duration and guess count', async () => {
    const randomizer: jest.Mocked<IWordRandomizer> = {
      getRandomWord: jest.fn().mockReturnValue('hello'),
    };

    jest.useFakeTimers();
    jest.setSystemTime(new Date('2024-04-15T12:00:00.000Z'));

    const gameStore = new MemGameStore(randomizer);
    const game = gameStore.createGame(5, true);

    const app = initApp(gameStore, db);

    // First guess
    await request(app)
      .post(`/api/games/${game.id}/guesses`)
      .send({ guess: 'cycle' })
      .set('Content-Type', 'application/json');

    // Second guess
    await request(app)
      .post(`/api/games/${game.id}/guesses`)
      .send({ guess: 'clara' })
      .set('Content-Type', 'application/json');

    jest.setSystemTime(new Date('2024-04-15T12:00:05.000Z'));

    // Third guess – correct!
    const result = await request(app)
      .post(`/api/games/${game.id}/guesses`)
      .send({ guess: 'hello' })
      .set('Content-Type', 'application/json');

    expect(result.body.result.correctWord).toEqual('hello');
    expect(result.body.result.duration).toBeCloseTo(5000);
    expect(result.body.result.guessCount).toEqual(3);
  });

  it('returns 404 when using nonexistent game', async () => {
    const gameStore: jest.Mocked<IGameStore> = {
      createGame: jest.fn(),
      findGameById: jest.fn().mockReturnValue(null),
    };

    const app = initApp(gameStore, db);

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

    const app = initApp(gameStore, db);

    await request(app).post('/api/games/abc123/guesses').expect(400);
  });
});

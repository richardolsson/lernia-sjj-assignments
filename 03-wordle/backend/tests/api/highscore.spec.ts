import request from 'supertest';
import initApp from '../../src/app';
import { IGameStore } from '../../src/game/types';
import { IDbAdapter } from '../../src/db/types';

describe('Highscore API', () => {
  const db: jest.Mocked<IDbAdapter> = {
    saveHighscore: jest.fn(),
  };

  it('responds with 404 for missing game', async () => {
    const gameStore: jest.Mocked<IGameStore> = {
      createGame: jest.fn(),
      findGameById: jest.fn().mockReturnValue(null),
    };

    const app = initApp(gameStore, db);

    await request(app)
      .post('/api/games/abc123/highscore')
      .send({ name: 'Clara' })
      .set('Content-Type', 'application/json')
      .expect(404);
  });

  it('responds with 400 for missing name', async () => {
    const gameStore: jest.Mocked<IGameStore> = {
      createGame: jest.fn(),
      findGameById: jest.fn().mockReturnValue({
        wordLength: 5,
        allowDuplicates: true,
        correctWord: 'hello',
        id: 'abc123',
        startTime: new Date(),
        endTime: null,
        guesses: [],
      }),
    };

    const app = initApp(gameStore, db);

    await request(app).post('/api/games/abc123/highscore').expect(400);
  });

  it('saves highscore to db', async () => {
    const gameStore: jest.Mocked<IGameStore> = {
      createGame: jest.fn(),
      findGameById: jest.fn().mockReturnValue({
        wordLength: 5,
        allowDuplicates: true,
        correctWord: 'hello',
        id: 'abc123',
        startTime: new Date(),
        endTime: null,
        guesses: [],
      }),
    };

    const db: jest.Mocked<IDbAdapter> = {
      saveHighscore: jest.fn(),
    };

    const app = initApp(gameStore, db);

    await request(app)
      .post('/api/games/abc123/highscore')
      .send({ name: 'Clara' })
      .set('Content-Type', 'application/json')
      .expect(201);

    expect(db.saveHighscore).toHaveBeenCalledTimes(1);
    expect(db.saveHighscore.mock.lastCall?.[0]).toEqual('Clara');
    expect(db.saveHighscore.mock.lastCall?.[1]).toMatchObject({
      id: 'abc123',
    });
  });
});

import request from 'supertest';
import initApp from '../../src/app';
import { IGameStore } from '../../src/game/types';

describe('Games API', () => {
  it('returns game ID for POST to /api/games', async () => {
    const gameStore: jest.Mocked<IGameStore> = {
      createGame: jest.fn().mockReturnValue({
        id: 'id-of-game',
      }),
    };

    const app = initApp(gameStore);
    const result = await request(app)
      .post('/api/games')
      .send({
        wordLength: 5,
        allowDuplicates: true,
      })
      .set('Content-Type', 'application/json');

    expect(result.status).toBe(201);
    expect(result.body).toEqual({
      id: 'id-of-game',
    });
  });

  it('returns 400 if body is missing', async () => {
    const gameStore: jest.Mocked<IGameStore> = {
      createGame: jest.fn(),
    };

    const app = initApp(gameStore);
    await request(app).post('/api/games').expect(400);
  });
});

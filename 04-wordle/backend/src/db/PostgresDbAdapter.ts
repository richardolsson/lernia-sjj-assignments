import { Pool, PoolConfig } from 'pg';
import { GameInfo, GameInfoInit, IDbAdapter } from './types';

export default class PostgresDbAdapter implements IDbAdapter {
  private pool: Pool;

  constructor(config: PoolConfig) {
    this.pool = new Pool(config);
  }

  async init() {
    await this.pool.query(`CREATE TABLE IF NOT EXISTS games (
      id SERIAL PRIMARY KEY,
      word_length INT NOT NULL,
      allow_repeat BOOL NOT NULL,
      correct_word TEXT NOT NULL,
      start_time TIMESTAMP NOT NULL DEFAULT now(),
      end_time TIMESTAMP
    );`);

    await this.pool.query(`CREATE TABLE IF NOT EXISTS guesses (
      id SERIAL PRIMARY KEY,
      game_id INT REFERENCES games(id),
      guess TEXT NOT NULL,
      timestamp TIMESTAMP DEFAULT now()
    )`);

    await this.pool.query(`CREATE TABLE IF NOT EXISTS highscore (
      id SERIAL PRIMARY KEY,
      game_id INT REFERENCES games(id),
      name TEXT NOT NULL
    )`);
  }

  async createGame(game: GameInfoInit): Promise<GameInfo> {
    const res = await this.pool.query(
      `INSERT INTO games(word_length, allow_repeat, correct_word)
      VALUES ($1::int, $2::bool, $3::text)
      RETURNING id, start_time`,
      [game.config.wordLength, game.config.allowRepeat, game.correctWord],
    );

    return {
      id: res.rows[0].id,
      config: game.config,
      correctWord: game.correctWord,
      startTime: res.rows[0].start_time,
      endTime: null,
    };
  }

  async endGame(gameId: number): Promise<void> {
    await this.pool.query(`UPDATE games SET end_time=now() WHERE id=$1::int`, [
      gameId,
    ]);
  }

  async findGame(gameId: number): Promise<GameInfo | null> {
    const res = await this.pool.query(
      `SELECT * FROM games WHERE id = $1::int`,
      [gameId],
    );

    if (res.rowCount != 1) {
      return null;
    }

    return {
      id: res.rows[0].id,
      config: {
        allowRepeat: res.rows[0].allow_repeat,
        wordLength: res.rows[0].word_length,
      },
      correctWord: res.rows[0].correct_word,
      endTime: res.rows[0].end_time,
      startTime: res.rows[0].start_time,
    };
  }

  async submitGuess(gameId: number, guess: string): Promise<void> {
    await this.pool.query(
      `INSERT INTO guesses (game_id, guess) VALUES($1::int, $2::text)`,
      [gameId, guess],
    );
  }

  async submitHighscore(gameId: number, name: string): Promise<number> {
    const res = await this.pool.query(
      `INSERT INTO highscore (game_id, name) VALUES ($1::int, $2::text) RETURNING id`,
      [gameId, name],
    );
    return res.rows[0].id;
  }
}

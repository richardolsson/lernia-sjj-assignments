import { Pool, PoolConfig } from 'pg';
import { GameInfo, GameInfoInit, HighscoreInfo, IDbAdapter } from './types';

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

  async endGame(gameId: number): Promise<GameInfo> {
    const resp = await this.pool.query(
      `UPDATE games SET end_time=now() WHERE id=$1::int RETURNING id, word_length, allow_repeat, correct_word, start_time, end_time`,
      [gameId],
    );

    return {
      id: resp.rows[0].id,
      config: {
        allowRepeat: resp.rows[0].allow_repeat,
        wordLength: resp.rows[0].word_length,
      },
      correctWord: resp.rows[0].correct_word,
      startTime: resp.rows[0].start_time,
      endTime: resp.rows[0].end_time,
    };
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

  async listHighscores(): Promise<HighscoreInfo[]> {
    const res = await this.pool.query(`
      SELECT
        hs.id, hs.name, hs.game_id,
        COUNT(guesses.id) AS guess_count,
        g.word_length, g.allow_repeat, g.correct_word, g.start_time, g.end_time
      FROM highscore hs
        LEFT JOIN games g ON (hs.game_id = g.id)
        LEFT JOIN guesses ON (guesses.game_id = g.id)
      GROUP BY hs.id, g.id`);

    return res.rows.map((row) => ({
      id: row.id,
      name: row.name,
      game: {
        id: row.game_id,
        config: {
          allowRepeat: row.allow_repeat,
          wordLength: row.word_length,
        },
        correctWord: row.correct_word,
        startTime: row.start_time,
        endTime: row.end_time,
      },
      guessCount: row.guess_count,
    }));
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

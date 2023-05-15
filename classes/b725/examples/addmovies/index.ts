import fs from 'fs/promises';
import { Client, Query } from 'ts-postgres';

async function run() {
  try {
    const movieData = await fs.readFile('./movies.json');
    var movies = JSON.parse(movieData.toString());
  } catch (err) {
    console.log('Failed to read movies.json. Download from Meilisearch docs');
  }

  const client = new Client({
    user: 'postgres',
    password: 'secret',
  });

  await client.connect();

  // Only add the first 1000 movies
  const someMovies = movies.slice(0,1000);

  for (const movie of someMovies) {
    const query = new Query('INSERT INTO movies (title, description) VALUES($1,$2)', [
      movie.title,
      movie.overview,
    ]);
    await client.execute(query);
    console.log('Inserted movie', movie.title.length > 20 ? `${movie.title.slice(0, 20)}...` : movie.title);
  }

  await client.end();
}

run();
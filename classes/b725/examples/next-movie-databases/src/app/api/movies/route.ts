import { NextResponse } from "next/server";
import { Client, Query } from 'ts-postgres';
import { createClient } from 'redis';

type Movie = {
  id: number;
  title: string;
  description: string;
  reviews: {
    rating: number;
    comment: string;
  }[];
}

async function loadMovies() {
  const client = new Client({
    user: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD,
  });

  await client.connect();

  const movies: Movie[] = [];

  const result = client.query('SELECT id,title,description FROM movies');
  for await (const row of result) {
    const movie: Movie = {
      id: row.data[0] as number,
      title: row.data[1] as string,
      description: row.data[2] as string,
      reviews: [],
    };

    const reviewQuery = new Query('SELECT rating,comment FROM reviews WHERE movie_id=$1', [
      movie.id,
    ]);
    const reviewResult = client.execute(reviewQuery);

    for await (const reviewRow of reviewResult) {
      movie.reviews.push({
        rating: reviewRow.data[0] as number,
        comment: reviewRow.data[1] as string,
      });
    }

    movies.push(movie);
  }

  return movies;
}

export async function GET() {
  const startTime = new Date();

  const redisClient = createClient();
  await redisClient.connect();

  // If the data is in the cache, no need to retrieve from postgres
  const cachedData = await redisClient.get('cache/movies');
  if (cachedData) {
    console.log('Request took (ms):', new Date().getTime() - startTime.getTime());
    return new NextResponse(cachedData);
  } else {
    const movies = await loadMovies();

    const moviesJson = JSON.stringify(movies);
    await redisClient.set('cache/movies', moviesJson, { EX: 10 });

    console.log('Request took (ms):', new Date().getTime() - startTime.getTime());
    return new NextResponse(moviesJson);
  }
}
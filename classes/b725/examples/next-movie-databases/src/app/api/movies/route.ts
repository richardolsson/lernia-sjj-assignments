import { NextResponse } from "next/server";
import { Client, Query } from 'ts-postgres';

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
  const movies = await loadMovies();
  return NextResponse.json(movies);
}
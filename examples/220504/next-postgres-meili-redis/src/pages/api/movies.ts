import { NextApiRequest, NextApiResponse } from "next";
import { createClient } from "redis";
import { Client, Query } from "ts-postgres";

type Review = {
  id: number;
  rating: number;
  comment: string;
};

type Movie = {
  id: number;
  title: string;
  description: string;
  reviews: Review[];
};

async function loadMoviesFromPostgres(): Promise<Movie[]> {
  const client = new Client({
    // TODO: Do not hard code passwords in code.
    // Should be in env variable
    user: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASS,
  });
  await client.connect();

  const movies: Movie[] = [];

  const result = client.query("SELECT * FROM movies");
  for await (const row of result) {
    const movie: Movie = {
      id: row.data[0] as number,
      title: row.data[1] as string,
      description: row.data[2] as string,
      reviews: [],
    };

    const reviewQuery = new Query("SELECT * FROM reviews WHERE movie_id=$1", [
      movie.id,
    ]);
    const reviewResult = client.execute(reviewQuery);

    for await (const reviewRow of reviewResult) {
      movie.reviews.push({
        id: reviewRow.data[0] as number,
        rating: reviewRow.data[1] as number,
        comment: reviewRow.data[2] as string,
      });
    }

    movies.push(movie);
  }

  return movies;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const startTime = new Date();

  const redisClient = createClient();
  await redisClient.connect();

  // If it exists in cache
  const cachedData = await redisClient.get("cache:movies");
  if (cachedData) {
    //    respond from cache
    res.status(200).send(cachedData);

    const endTime = new Date();
    console.log("Finished request", endTime.getTime() - startTime.getTime());
  } else {
    //    Query database
    const movies = await loadMoviesFromPostgres();
    //    Add to cache
    const moviesJson = JSON.stringify(movies);
    await redisClient.set("cache:movies", moviesJson, { EX: 10 });

    //    Respond from database
    res.status(200).send(moviesJson);

    const endTime = new Date();
    console.log("Finished request", endTime.getTime() - startTime.getTime());
  }
}

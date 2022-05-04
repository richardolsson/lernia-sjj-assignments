import { NextApiRequest, NextApiResponse } from "next";
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

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
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

  res.status(200).json(movies);
}

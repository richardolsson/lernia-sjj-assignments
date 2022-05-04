import MeiliSearch from "meilisearch";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const msClient = new MeiliSearch({
    host: "http://localhost:7700",
  });

  const index = msClient.index("movies");

  const searchString = Array.isArray(req.query.q)
    ? req.query.q[0]
    : req.query.q;

  const result = await index.search(searchString);

  res.status(200).json(result);
}

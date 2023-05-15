import MeiliSearch from 'meilisearch';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  const msClient = new MeiliSearch({
    host: 'http://localhost:7700',
  });

  const index = msClient.index('movies');
  const searchString = request.nextUrl.searchParams.get('q');
  const result = await index.search(searchString);

  return NextResponse.json(result.hits);
}
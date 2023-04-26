import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const body = await request.json();
  const { username } = body;

  const response = new NextResponse();
  response.cookies.set('username', username);

  return response;
}
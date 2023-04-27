import { NextRequest, NextResponse } from "next/server";
import JWT from 'jsonwebtoken';
import { ENC_KEY } from "@/constants";

const PASSWORDS_BY_USER: Record<string, string> = {
  clara: 'claraspass',
  richard: 'richardspass',
};

export async function POST(request: NextRequest) {
  const body = await request.json();
  const { username, password } = body;

  const response = new NextResponse();

  const correctPassword = PASSWORDS_BY_USER[username];
  if (password == correctPassword) {
    const sessionData = {
      username: username,
    };

    const jwt = JWT.sign(sessionData, ENC_KEY);

    response.cookies.set('session', jwt);
  } else {
    return new NextResponse(null, { status: 401 });
  }

  return response;
}
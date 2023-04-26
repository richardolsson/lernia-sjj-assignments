import { NextRequest, NextResponse } from "next/server";
import JWT from 'jsonwebtoken';
import { ENC_KEY } from "@/constants";
import Iron from '@hapi/iron';

export async function POST(request: NextRequest) {
  const body = await request.json();
  const { username } = body;

  const sessionData = {
    username: username,
    secretData: await Iron.seal({
      some: 'secret',
    }, ENC_KEY, Iron.defaults),
  };

  const jwt = JWT.sign(sessionData, ENC_KEY);

  const response = new NextResponse();
  response.cookies.set('session', jwt);

  return response;
}
import { NextRequest, NextResponse } from "next/server";
import Iron from '@hapi/iron';
import { ENC_KEY } from "@/constants";

export async function POST(request: NextRequest) {
  const body = await request.json();
  const { username } = body;

  const sessionData = {
    username: username,
    loginTime: new Date().toISOString(),
  };

  const sealed = await Iron.seal(sessionData, ENC_KEY, Iron.defaults);

  const response = new NextResponse();
  response.cookies.set('session', sealed);

  return response;
}
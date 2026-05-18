import jsonwebtoken from 'jsonwebtoken';
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const payload = await request.json();

  if (payload.username == 'admin' && payload.password == 'password') {
    const response = new NextResponse();
    const sessionData = {
      username: payload.username,
      loginTime: new Date().toISOString(),
    };

    const jwt = jsonwebtoken.sign(sessionData, process.env.JWT_KEY || '');

    response.cookies.set('session', jwt);

    return response;
  } else {
    return NextResponse.json({}, { status: 401 });
  }
}
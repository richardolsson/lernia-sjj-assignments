import { NextRequest, NextResponse } from "next/server";
import jsonwebtoken from 'jsonwebtoken';

export async function POST(request: NextRequest) {
  const payload = await request.json();
  if (payload.username == "admin" && payload.password == "secretpass") {
    const sessionData = {
      username: payload.username,
      loginTime: new Date().toISOString(),
    };

    const jwt = jsonwebtoken.sign(sessionData, process.env.ENC_KEY!);

    const response = new NextResponse();
    response.cookies.set("session", jwt);
    return response;
  } else {
    return NextResponse.json({}, { status: 401 });
  }
}

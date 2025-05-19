import Iron from "@hapi/iron";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const payload = await request.json();
  if (payload.username == "admin" && payload.password == "secretpass") {
    const response = new NextResponse();

    const sessionData = {
      username: payload.username,
      loginTime: new Date().toISOString(),
    };

    const sealed = await Iron.seal(
      sessionData,
      process.env.ENC_KEY!,
      Iron.defaults
    );

    response.cookies.set("session", sealed);
    return response;
  } else {
    return NextResponse.json({}, { status: 401 });
  }
}

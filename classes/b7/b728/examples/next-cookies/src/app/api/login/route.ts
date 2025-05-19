import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const payload = await request.json();
  if (payload.username == "admin" && payload.password == "secretpass") {
    const response = new NextResponse();
    response.cookies.set("username", payload.username);
    return response;
  } else {
    return NextResponse.json({}, { status: 401 });
  }
}

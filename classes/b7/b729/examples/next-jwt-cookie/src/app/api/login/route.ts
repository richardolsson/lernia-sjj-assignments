import bcrypt from "bcrypt";
import { NextRequest, NextResponse } from "next/server";
import jsonwebtoken from "jsonwebtoken";

// This should really be in a database
const users = [
  {
    username: "admin",
    passwordHash:
      "$2b$14$UVE0oY.BzMEjaENbOQi54.QUSm4K8ZXiG/zix81aTT9rkMPnpsoW.",
  },
];

export async function POST(request: NextRequest) {
  const payload = await request.json();
  const user = users.find(
    (candidate) => candidate.username == payload.username
  );

  if (user) {
    const passwordIsCorrect = await bcrypt.compare(
      payload.password,
      user.passwordHash
    );

    if (passwordIsCorrect) {
      const sessionData = {
        username: payload.username,
        loginTime: new Date().toISOString(),
      };

      const jwt = jsonwebtoken.sign(sessionData, process.env.ENC_KEY!);

      const response = new NextResponse();
      response.cookies.set("session", jwt);
      return response;
    }
  }

  return NextResponse.json({}, { status: 401 });
}

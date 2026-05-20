import bcrypt from 'bcrypt';
import jsonwebtoken from 'jsonwebtoken';
import { NextRequest, NextResponse } from "next/server";

// TODO: This should be in a database instead
const USERS = [
  {
    username: 'admin',
    passwordHash: '$2b$10$Brt5GnlSLVWxQAV3UTVwhOt6hZ7NU7RE2AhmUMUp1UXSEFh/Fvvf.',
  },
];

export async function POST(request: NextRequest) {
  const payload = await request.json();

  const user = USERS.find(candidate => candidate.username == payload.username);
  if (user) {
    const passwordIsCorrect = await bcrypt.compare(payload.password, user.passwordHash);

    if (passwordIsCorrect) {
      const response = new NextResponse();
      const sessionData = {
        username: payload.username,
        loginTime: new Date().toISOString(),
      };

      const jwt = jsonwebtoken.sign(sessionData, process.env.JWT_KEY || '');

      response.cookies.set('session', jwt);

      return response;
    }
  }

  return NextResponse.json({}, { status: 401 });
}
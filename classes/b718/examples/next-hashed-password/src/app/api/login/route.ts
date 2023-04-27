import bcrypt from 'bcrypt';
import { NextRequest, NextResponse } from "next/server";
import JWT from 'jsonwebtoken';
import { ENC_KEY } from "@/constants";

// Object is only an example. This should normally be saved in database.
const PASSWORDS_BY_USER: Record<string, string> = {
  clara: '$2b$04$T7B12.XYKkM5OqHb9KZuFOPKLkvBESQSPbWPI2S3NR2vfpGoTPTam',
  richard: '$2b$04$LKhdPALbEPs3Mt1HoruTGOzPnF1c2u1sh4.fBuVmXQKTFJ6cwPS9C',
};

// The hashes were generated using:
// bcrypt.hash('claraspass', 1, (err, hash) => console.log(hash))

export async function POST(request: NextRequest) {
  const body = await request.json();
  const { username, password } = body;

  const response = new NextResponse();

  const correctPasswordHash = PASSWORDS_BY_USER[username];
  const passwordWasCorrect = await bcrypt.compare(password, correctPasswordHash);
  if (passwordWasCorrect) {
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
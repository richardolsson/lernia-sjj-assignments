import bcrypt from 'bcrypt';
import UserModel from '@/db/models/UserModel';
import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';
import jsonwebtoken from 'jsonwebtoken';

const postSchema = z.object({
  email: z.string(),
  password: z.string(),
});

export async function POST(request: NextRequest) {
  const payload = await request.json();
  const parsed = postSchema.safeParse(payload);

  if (!parsed.success) {
    return new NextResponse(null, { status: 400 });
  }

  const { email, password } = parsed.data;

  const user = await UserModel.findOne({ email });
  if (!user) {
    return new NextResponse(null, { status: 401 });
  }

  const valid = await bcrypt.compare(password, user.passwordHash);
  if (!valid) {
    return new NextResponse(null, { status: 401 });
  }

  const secret = process.env.JWT_SECRET;
  if (!secret) {
    throw new Error('Env variable JWT_SECRET must be set');
  }

  const jwt = jsonwebtoken.sign(
    {
      sub: user.toJSON()._id,
    },
    secret
  );

  const response = NextResponse.json({
    id: user._id,
    firstName: user.firstName,
    lastName: user.lastName,
    email: user.email,
  });
  response.cookies.set('token', jwt);

  return response;
}

import bcrypt from 'bcrypt';
import UserModel from '@/db/models/UserModel';
import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';
import jsonwebtoken from 'jsonwebtoken';
import getJwtSecret from '@/utils/getJwtSecret';

const postSchema = z.object({
  email: z.string(),
  password: z.string(),
});

export type LoginPostBody = z.infer<typeof postSchema>;

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

  const secret = getJwtSecret();

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
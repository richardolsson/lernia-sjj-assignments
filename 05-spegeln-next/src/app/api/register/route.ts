import bcrypt from 'bcrypt';
import connectToDatabase from '@/db/connectToDatabase';
import UserModel from '@/db/models/UserModel';
import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';

const postSchema = z.object({
  firstName: z.string(),
  lastName: z.string(),
  email: z.string(),
  password: z.string(),
});

export async function POST(request: NextRequest) {
  await connectToDatabase();

  const payload = await request.json();
  const parsed = postSchema.safeParse(payload);

  if (!parsed.success) {
    return new NextResponse(null, { status: 400 });
  }

  const { firstName, lastName, email, password } = parsed.data;

  const passwordHash = await bcrypt.hash(password, 3);

  const user = new UserModel({
    firstName,
    lastName,
    email,
    passwordHash,
  });

  await user.save();

  return NextResponse.json(
    {
      id: user.id,
      firstName,
      lastName,
      email,
    },
    { status: 201 }
  );
}

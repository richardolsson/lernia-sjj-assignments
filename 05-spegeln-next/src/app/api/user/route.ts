import { NextRequest, NextResponse } from 'next/server';
import jsonwebtoken from 'jsonwebtoken';
import getJwtSecret from '@/utils/getJwtSecret';
import UserModel from '@/db/models/UserModel';

export async function GET(request: NextRequest) {
  const tokenCookie = request.cookies.get('token');
  if (!tokenCookie) {
    return new NextResponse(null, { status: 401 });
  }

  try {
    var payload = jsonwebtoken.verify(tokenCookie.value, getJwtSecret());
  } catch (err) {
    return new NextResponse(null, { status: 401 });
  }

  const userId = payload.sub;

  if (!userId) {
    return new NextResponse(null, { status: 400 });
  }

  const user = await UserModel.findById(userId);
  if (!user) {
    return new NextResponse(null, { status: 401 });
  }

  return NextResponse.json({
    id: user._id,
    firstName: user.firstName,
    lastName: user.lastName,
    email: user.email,
  });
}

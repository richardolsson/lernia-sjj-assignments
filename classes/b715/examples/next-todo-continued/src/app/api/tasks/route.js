import { NextResponse } from "next/server";

const fakeDatabase = [];

export function GET() {
  return NextResponse.json(fakeDatabase);
}

export async function POST(request) {
  const payload = await request.json();
  fakeDatabase.push(payload);

  return NextResponse.json(fakeDatabase, { status: 201 });
}
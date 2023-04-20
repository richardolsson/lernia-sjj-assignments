import { NextResponse } from "next/server";

const fakeDatabase = [];

export function DELETE() {
  fakeDatabase.length = 0;
  return new NextResponse();
}

export function GET() {
  return NextResponse.json(fakeDatabase);
}

export async function POST(request) {
  const payload = await request.json();
  fakeDatabase.push(payload);

  return NextResponse.json(payload, { status: 201 });
}
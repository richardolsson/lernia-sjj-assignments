import { NextRequest, NextResponse } from "next/server";

type Task = {
  label: string;
  completed: boolean;
};

const fakeDatabase: Task[] = [];

export async function GET() {
  return NextResponse.json({
    tasks: fakeDatabase,
  });
}

export async function POST(request: NextRequest) {
  const payload = await request.json();

  fakeDatabase.push(payload);

  return NextResponse.json(payload, { status: 201 });
}
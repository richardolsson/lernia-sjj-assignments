import { Task } from "@/types";
import { NextRequest, NextResponse } from "next/server";

const fakeDatabase: Task[] = [
    {
      label: 'Learn NEXT.js',
      completed: false,
    },
];

export function GET() {
  return NextResponse.json(fakeDatabase);
}

export async function POST(req: NextRequest) {
  const newTask = await req.json();

  fakeDatabase.push(newTask);

  return NextResponse.json(newTask, { status: 201 });
}
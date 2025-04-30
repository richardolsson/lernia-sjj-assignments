import { TaskItem } from "@/types";
import { NextRequest, NextResponse } from "next/server";

const fakeDatabase: TaskItem[] = [
  {
    label: 'Learn NEXT.js',
    completed: false,
  }
];

export function GET() {
  return NextResponse.json({
    data: fakeDatabase,
  });
}

export async function POST(req: NextRequest) {
  const newTask = await req.json();

  fakeDatabase.push(newTask);

  return NextResponse.json({ data: newTask }, { status: 201 });
}
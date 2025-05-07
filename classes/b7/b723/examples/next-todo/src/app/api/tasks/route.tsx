import { Task } from "@/models";
import mongoose from "mongoose";
import { NextRequest, NextResponse } from "next/server";

export async function GET() {
  await mongoose.connect(process.env.MONGODB_URL!);

  const tasks = await Task.find();

  return NextResponse.json({
    data: tasks
  });
}

export async function POST(req: NextRequest) {
  await mongoose.connect(process.env.MONGODB_URL!);
  const payload = await req.json();
  const newTask = new Task({
    label: payload.label,
    completed: false,
  });

  await newTask.save();

  return NextResponse.json({ data: newTask }, { status: 201 });
}
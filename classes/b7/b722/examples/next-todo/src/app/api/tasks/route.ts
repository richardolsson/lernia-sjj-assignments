import { TaskModel } from "@/models";
import mongoose from "mongoose";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  await mongoose.connect(process.env.MONGODB_URL || '');
  const payload = await req.json();
  const newTask = new TaskModel(payload);

  await newTask.save();

  return NextResponse.json(newTask, { status: 201 });
}
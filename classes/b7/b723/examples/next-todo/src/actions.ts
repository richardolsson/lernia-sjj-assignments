'use server';

import mongoose from "mongoose";
import { Task } from "./models";

export async function createTask(label: string) {
  console.log('createTask()');
  await mongoose.connect(process.env.MONGODB_URL!);
  const newTask = new Task({
    label: label,
    completed: false,
  });

  await newTask.save();

  return {
    ...newTask.toObject(),
    _id: newTask._id.toString(),
  };
}
'use server';

import { TaskModel } from "@/models";
import { Task } from "@/types";
import mongoose from "mongoose";

export async function createTask(taskData: Task) {
  await mongoose.connect(process.env.MONGODB_URL || '');
  const newTask = new TaskModel(taskData);

  await newTask.save();

  return {
    label: newTask.label,
    completed: newTask.completed,
  };
}
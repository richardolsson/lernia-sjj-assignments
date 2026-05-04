import { TaskModel } from "@/models";
import Todo from "@/Todo";
import mongoose from "mongoose";

export default async function Home() {
  await mongoose.connect(process.env.MONGODB_URL || '');

  const tasks = await TaskModel.find();

  return (
    <Todo tasks={tasks}/>
  )
}

import Todo from "@/components/Todo";
import { Task } from "@/models";
import mongoose from "mongoose";

export default async function Home() {
  console.log('Home render!');
  await mongoose.connect(process.env.MONGODB_URL!);

  const tasks = await Task.find();
  const taskObjects = tasks.map(task => ({
    ...task.toObject(),
    _id: task._id.toString(),
  }));

  return (
    <div className="app-page">
      <Todo tasks={taskObjects} />
    </div>
  );
}

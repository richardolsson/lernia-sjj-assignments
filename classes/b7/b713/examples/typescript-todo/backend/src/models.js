import mongoose from "mongoose";

const taskSchema = new mongoose.Schema({
  completed: Boolean,
  label: String,
});

const Task = mongoose.model('Task', taskSchema);

export {
  Task
}
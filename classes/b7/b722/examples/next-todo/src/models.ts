import mongoose from "mongoose";

const taskSchema = new mongoose.Schema({
  completed: Boolean,
  label: String,
});

const TaskModel = mongoose.models.TaskModel || mongoose.model('TaskModel', taskSchema);

export {
  TaskModel
};
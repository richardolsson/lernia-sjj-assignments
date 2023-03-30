import mongoose from 'mongoose';

const Task = mongoose.model('Task', {
  text: String,
  completed: Boolean,
});

export { Task }
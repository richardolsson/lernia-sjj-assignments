import mongoose from "mongoose";

const Item = mongoose.model('Item', {
  label: String,
  completed: Boolean,
});

export { Item }
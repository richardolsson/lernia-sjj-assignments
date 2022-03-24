import mongoose from "mongoose";

const Room = mongoose.model("Room", {
  size: Number,
  inhabitant: {
    name: String,
    age: Number,
  },
});

export { Room };

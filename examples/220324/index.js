import mongoose from "mongoose";

mongoose.connect("mongodb://localhost:27017/test");

async function run() {
  // Create Model and Schema
  const Room = mongoose.model("Room", {
    size: Number,
    inhabitant: {
      name: String,
      age: Number,
    },
  });

  const rooms = await Room.find({ "inhabitant.age": { $gt: 30 } });
  console.log(rooms);
}

run();

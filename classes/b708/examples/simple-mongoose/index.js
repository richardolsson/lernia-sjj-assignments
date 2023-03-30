import mongoose from 'mongoose';

const Room = mongoose.model("Room", {
  size: Number,
  inhabitant: {
    name: String,
    age: Number,
  },
});

async function run() {
  const conn = await mongoose.connect('mongodb://127.0.0.1:27017/test');

  const room = new Room({
    size: 24,
    inhabitant: {
      name: 'Richard',
      age: 37,
    },
  });

  await room.save();

  const rooms = await Room.find();
  console.log(rooms);

  conn.disconnect();
}

run();
import mongoose from "mongoose";

mongoose.connect("mongodb://localhost:27017/test");

async function run() {
  // Create Model and Schema
  const Cat = mongoose.model("Cat", { name: String });

  // Instantiate a document from Cat model
  //const kitty = new Cat({ name: "Zildjian" });
  //await kitty.save();
  //console.log("Meow");

  //const cats = await Cat.find();
  //console.log(cats);

  //const cat = await Cat.findOne({ name: "Fido" });
  //console.log(cat);
}

run();

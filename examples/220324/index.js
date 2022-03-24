import mongoose from "mongoose";

import app from "./src/app.js";

mongoose.connect("mongodb://localhost:27017/test");

app.listen(5080);

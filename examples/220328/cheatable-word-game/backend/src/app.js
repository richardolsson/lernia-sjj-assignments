import cors from "cors";
import express from "express";

import { getRandomWord } from "./utils.js";

const app = express();

app.use(cors());

export default app;

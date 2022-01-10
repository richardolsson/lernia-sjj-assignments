import express from "express";

const app = express();

app.get("/hello", (request, response) => {
  response.send("Hello, world!");
});

app.use("/goodbye", (request, response) => {
  response.send("Goodbye, world!");
});

app.listen(5080);

const express = require("express");
const app = express();

app.get("/", (request, response) => {
  console.log("hello logger!");
  response.send("<h1>Hello text-tools!</h1>");
});

const listener = app.listen(80, () => {
  console.log("listening on port 80");
});

process.on("SIGTERM", () => {
  listener.close(() => {});
});

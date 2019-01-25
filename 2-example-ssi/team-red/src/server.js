/* eslint-disable no-console */
import express from "express";
import morgan from "morgan";

const app = express();
app.use(morgan("dev"));
app.use("/red", express.static("./static"));

app.get("/red", function(request, response) {
  response.sendfile("./static/index.html");
});

app.listen(3003);
console.log(`🔴  team red running.`);

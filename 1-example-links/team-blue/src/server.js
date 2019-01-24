/* eslint-disable no-console */
import express from "express";
import morgan from "morgan";

const app = express();
app.use(morgan("dev"));
app.use("/blue", express.static("./static"));

app.get("/blue", function(request, response) {
  response.sendfile("./static/index.html");
});

app.listen(3001);
console.log(`🔵  team blue running.`);

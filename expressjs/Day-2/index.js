import express from "express";
var app = express();
import personalroute from "./personal.js";
///normal routing
app.get('/', (_req, res) => {
  res.send("Home page")
});
//using routing externally
app.use('/personal', personalroute)
app.listen(3000, () => {
  console.log("Running at 3000")
});

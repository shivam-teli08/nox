import express from "express";
const app = express();
app.get('/', (_req, res) => {
  res.send("Visisted Home page")
});
app.post('/post', (_req, res) => {
  res.send("You did post request");
});
app.put('/put', (_req, res) => {
  res.send("You did put request")
});
app.delete('/delete', (_req, res) => {
  res.send("You did delete request")
})
app.listen(8000, () => {
  console.log("Hello world")
})
import express from 'express';
var app = express();
app.get('/', function (req, res) {
  res.send('Hello World!');
});
app.get('/about', function (req, res) {
  res.send("About section")
});
app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
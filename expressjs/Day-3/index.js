import express from 'express';
import dynamicRoute from './dynamicroute.js';
var app = express();
app.get('/', (_req, res) => {
  res.send('Hello World!');
});
app.use('/dynamic', dynamicRoute);
app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});
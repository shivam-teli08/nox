import express from 'express';
const app = express();
app.use((_req, _res, next) => {
  console.log('Hello from middleware1!');
  next();
})
app.use((req, _res, next) => {
  console.log(`Request Method: ${req.method}`);
  console.log(`Request URL: ${req.url}`);
  console.log(`Request Time: ${new Date().toISOString()}`);
  next();
});
app.get('/', (_req, res) => {
  res.send('Hello World!');
});
app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});

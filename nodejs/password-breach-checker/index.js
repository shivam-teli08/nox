const readline = require('readline');
const http = require('http');
const data = require('./data')
const PORT = 3000;
const server = http.createServer((req, res) => {
  res.end('Hello World');
}).listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
const r1 = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})
r1.question('whhat is your email? ', (email) => {
  if (data[email]) {
    console.warn(`Data for ${email}:`, data[email]);
  } else {
    console.log(`No data found for ${email}`);
  }
  r1.close();
  server.close(() => {
    console.log('Server closed');
  });
});
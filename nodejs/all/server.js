http = require('node:http');
http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.end('<h2>Hello Shivam</h2>');
}).listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});
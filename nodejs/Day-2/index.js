const http = require('http');
const fs = require('fs');
//server creation
const server = http.createServer((req, res) => {
  const log = `${new Date().toISOString()} - ${req.method} ${req.url}\n`;
  // Log the request
  fs.appendFile('server.log', log, (err) => {
    if (err) {
      console.error('Error writing to log file:', err);
    }
  });
});
//server listening
const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
})

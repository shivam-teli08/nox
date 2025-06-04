const fs = require('fs');
const os = require('os');
console.log(os.cpus().length); // Get the operating system's CPU architecture
// we do this operations using synchronous and asynchronous methods
// sync is blocking and async is non-blocking
// writing to a file
// fs.writeFileSync('./hello.txt', 'Hello, World!'); // Synchronous method
// console.log('File written synchronously.');
fs.writeFile('./hello.txt', 'Hello, World!', (err) => {
  if (err) {
    console.error('Error writing file:', err);
  } else {
    console.log('File written asynchronously.');
  }
})// Asynchronous method
// reading a file
// const data = fs.readFileSync('./hello.txt', 'utf8'); // Synchronous method
// console.log('File content (sync):', data);
fs.readFile('./hello.txt', 'utf8', (err, data) => { // Asynchronous method
  if (err) {
    console.error('Error reading file:', err);
  } else {
    console.log('File content (async):', data);
  }
});
//updating a file
// fs.appendFileSync('./hello.txt', '\nWelcome to Node.js!'); // Synchronous method
fs.appendFile('./hello.txt', '\nWelcome to Node.js!', (err) => { // Asynchronous method
  if (err) {
    console.error('Error appending to file:', err);
  } else {
    console.log('File updated asynchronously.');
  }
});
// deleting a file
// fs.unlinkSync('./hello.txt'); // Synchronous method
fs.unlink('./hello.txt', (err) => { // Asynchronous method
  if (err) {
    console.error('Error deleting file:', err);
  } else {
    console.log('File deleted asynchronously.');
  }
});

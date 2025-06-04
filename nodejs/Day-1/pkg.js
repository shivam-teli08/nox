// This module exports a function that returns a greeting message.
function getHi(name) {
  return `Hello, ${name}!`;
}
// Exporting the function so it can be used in other files
module.exports = {
  getHi: getHi
}
const greeting = (name) => {
  console.log('Hello  ' + name);
}

const processUserName = (callback) => {
  name = 'GeeksforGeeks';
  callback(name);
}
processUserName(greeting);
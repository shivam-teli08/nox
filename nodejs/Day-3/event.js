//events in nodejs are similar to events in real life, like a button click or a mouse hover. In Node.js, events are used to handle asynchronous operations and allow you to respond to specific actions or changes in your application.
const event = require('events');
//event module is constructor function that allows you to create and handle custom events in Node.js. that's why we create an instance of EventEmitter class
//EventEmitter class is used to create an event emitter object that can emit events and register listeners for those events
const e = new event.EventEmitter();
// Register an event listener for the 'event' event
//on(eventName, listener)-create an event listener
e.on('SAYHI', (name) => {
  console.log(`Hello ${name}`);
})
//emit(eventName, [arg1], [arg2], [...])-execute all listeners for the event
e.emit('SAYHI', 'Shivam'); // Output: Hello Shivam

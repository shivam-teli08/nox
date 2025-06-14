const calc = require('./modules')
const orderItems = [
  { price: 100, quantity: 2 },
  { price: 150, quantity: 1 },
  { price: 50, quantity: 3 }
];
console.log(calc.billcalc(orderItems))
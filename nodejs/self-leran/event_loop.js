console.log("This is an order system program to demonstrate event loops in Node.js");
const menu = {
  "momo": 100,
  "burger": 100,
  "pizza": 150,
};
const order = (itemname) => {
  if (itemname in menu) {
    if (menu[itemname] > 100) {
      setTimeout(() => {
        console.log(`Your order for ${itemname} is ready!`);
      }, 3000);
    } else {
      setTimeout(() => {
        console.log(`Your order for ${itemname} is ready!`);
      }, 1000);
    }
  } else {
    console.log(`Sorry, we don't have ${itemname} on the menu.`);
  }
};

order("momo");
order("pizza");
order("burger");

console.log("Your bill will be given after you finish eating.");

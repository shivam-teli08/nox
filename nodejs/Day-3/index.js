const fs = require('fs');
const event = require('events');
const e = new event.EventEmitter();

const filePath = 'eventCount.json';

// Load previous count from file (if it exists)
let count = {
  login: 0,
  logout: 0,
  purchase: 0,
  profileUpdate: 0
};

if (fs.existsSync(filePath)) {
  try {
    const data = fs.readFileSync(filePath, 'utf-8');
    count = JSON.parse(data);
  } catch (err) {
    console.error("Error reading count file:", err);
  }
}

// Event handlers
e.on('Login', (username) => {
  count.login++;
  console.log(`User ${username} has logged in.`);
});

e.on('Logout', (username) => {
  count.logout++;
  console.log(`User ${username} has logged out.`);
});

e.on('Purchase', (username, item) => {
  count.purchase++;
  console.log(`User ${username} has purchased ${item}.`);
});

e.on('ProfileUpdate', (username, newProfile) => {
  count.profileUpdate++;
  console.log(`User ${username} updated their profile to: ${newProfile}`);
});

// Emit events
e.emit('Login', 'Shivam');
e.emit('Purchase', 'Shivam', 'Laptop');
e.emit('ProfileUpdate', 'Shivam', 'New Profile Picture');
e.emit('Logout', 'Shivam');

// Save updated count back to file
fs.writeFileSync(filePath, JSON.stringify(count), 'utf-8');

console.log("\nUpdated Event Count:");
console.log(count);

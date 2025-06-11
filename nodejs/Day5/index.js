// Os module in js
const os = require('os');
// Get the operating system platform
console.log('Operating System Platform:', os.platform());
//get the user info
console.log('User Info:', os.userInfo());
//get the cpus
console.log('CPUs:', os.cpus());
//get the free memory
console.log('Free Memory:', os.freemem());
//cpu architecture
console.log('CPU Architecture:', os.arch());
//get the total memory
console.log('Total Memory:', os.totalmem());
//directory of user
console.log('Home Directory:', os.homedir());
//get the uptime
console.log('System Uptime:', os.uptime(), 'seconds');
//os type
console.log('OS Type:', os.type());

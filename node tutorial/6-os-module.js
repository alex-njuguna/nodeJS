const os = require("os");

// get current user
const user = os.userInfo();
console.log(user);

// get system uptime
console.log(`The system has an uptime of ${os.uptime()} seconds`);

// get current os details
const currentOS = {
  name: os.type(),
  release: os.release(),
  totalMem: os.totalmem(),
  freeMem: os.freemem(),
};
console.log(currentOS);

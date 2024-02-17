const { readFileSync, writeFileSync } = require("fs");

const first = readFileSync("./content/first.txt", "utf8");
const second = readFileSync("./content/second.txt", "utf8");

// write into a file or create a file
// writeFileSync(
//   "./content/result.txt",
//   `Here is the result: ${first}, ${second}`
// );

// append to a file
writeFileSync("./content/result.txt", `${first} \n${second}\n`, { flag: "a" });

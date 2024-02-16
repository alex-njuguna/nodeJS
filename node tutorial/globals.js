// __filename - get the current file name
// __dirname - get the current working directory
// process - query our current working environmnt
// require - function to use module(CommonJS)
// module - info about current module(file)

console.log(module);
console.log(__filename);

let x = 0;
setInterval(() => {
  console.log((x += 1));
}, 1000);

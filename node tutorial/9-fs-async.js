// asynchronously read and write files
const { readFile, writeFile } = require("fs");

// read the first f ile
readFile("./content/first.txt", "utf8", (err, result) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log(result);
  const first = result;

  // read the second file
  readFile("./content/second.txt", "utf8", (err, result) => {
    if (err) {
      console.log(err);
      return;
    }
    console.log(result);
    const second = result;

    // write the contents of file1 and file2 to anothe file
    writeFile(
      "./content/result-async.txt",
      `Here is the resullt: ${first}, ${second}`,
      { flag: "a" },
      (err) => {
        if (err) {
          console.log(err);
          return;
        }
      }
    );
  });
});

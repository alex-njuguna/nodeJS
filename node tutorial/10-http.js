const http = require("http");

const server = http.createServer((req, res) => {
  //   console.log(req);
  if (req.url === "/") {
    res.end("Welcome to the home page.");
  } else if (req.url === "/about") {
    res.end("This is a short story about us.");
  } else {
    res.end(`
    <h1>Ooops!</hi>
    <p>cannot seem to find that gage</p>
    <a href='/'>back home</a>
    `);
  }
});

server.listen(5000);

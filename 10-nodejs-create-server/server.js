const http = require("http");
const fs = require("fs");
const path = require("path");
const { log } = require("console");

const hostname = "localhost";
const port = 5900;

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/html" });

  const url = req.url;

  if (url === "/") {
    fs.readFile(path.join(__dirname, "index.html"), "utf8", (err, data) => {
      if (err) throw err;
      res.end(data);
    });
  } else if (url === "/about") {
    fs.readFile(path.join(__dirname, "about.html"), "utf8", (err, data) => {
      if (err) throw err;
      res.end(data);
    });
  } else if (url === "/contact") {
    fs.readFile(path.join(__dirname, "contact.html"), "utf8", (err, data) => {
      if (err) throw err;
      res.end(data);
    });
  }
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

const http = require("http");
const fs = require("fs");
const path = require('path')

const hostname = "localhost";
const port = 5900;

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/html" });

  fs.readFile(path.join(__dirname, 'index.html'), 'utf8', (err,data) => {
    if (err) throw err;
    res.end(data);
  })

});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

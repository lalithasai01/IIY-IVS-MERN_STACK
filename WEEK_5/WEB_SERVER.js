const http = require("http");

const server = http.createServer(function (req, res) {
  res.writeHead(200, { "Content-Type": "text/html" });

  res.write("<h1>Welcome to Node.js Web Server</h1>");

  res.end();
});

server.listen(3000);

console.log("Server running at http://localhost:3000");

const http = require("http");

const server = http.createServer(function (req, res) {
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.write("Data transfer using HTTP Protocol\n");
  res.write("Course: Node.js\n");
  res.write("Status: Successful");
  res.end();
});

server.listen(4000);
console.log("Server running at http://localhost:4000");

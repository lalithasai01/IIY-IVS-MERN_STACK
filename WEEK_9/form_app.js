const express = require("express");
const app = express();

app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send(`<form method="POST" action="/submit">
  Name: <input name="name"/>
  <button>Submit</button>
  </form>`);
});

app.post("/submit", (req, res) => {
  res.send("Hello " + req.body.name);
});

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});

const express = require("express");
const app = express();

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("index", { name: "Student" });
});

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});

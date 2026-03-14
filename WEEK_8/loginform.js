const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send(`
        <h2>Login Page</h2>
        <form method="POST" action="/login">
            Username: <input type="text" name="username"/><br><br>
            Password: <input type="password" name="password"/><br><br>
            <button type="submit">Login</button>
        </form>
    `);
});

app.post("/login", (req, res) => {
  const { username, password } = req.body;

  if (username === "admin" && password === "1234") {
    res.send("<h2>Login successful! Welcome admin</h2>");
  } else {
    res.send("<h2>Invalid username or password</h2>");
  }
});

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});

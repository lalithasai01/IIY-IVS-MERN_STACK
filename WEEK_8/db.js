const express = require("express");
const mongoose = require("mongoose");
const app = express();
app.use(express.json());

mongoose
  .connect("mongodb://localhost:27017/mydb")
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.error("Error connecting to MongoDB:", err);
  });

const StudentSchema = new mongoose.Schema({
  name: String,
  age: Number,
});

const student = mongoose.model("Student", StudentSchema);
app.post("/add", async (req, res) => {
  const student = new student(req.body);
  await student.save();
  res.send("student added");
});
app.get("/students", async (req, res) => {
  const dta = await student.find();
  res.json(data);
});
app.put("/update/:id", async (req, res) => {
  await student.findByIdAndUpdate(req.params.id, +req.body);
  res.send("student updated");
});
app.delete("/delete/:id", async (req, res) => {
  await student.findByIdAndDelete(req.params.id, req.body);
  res.send("student deleted");
});
app.listen(3000, () => {
  console.log("server runing on port 3000");
});

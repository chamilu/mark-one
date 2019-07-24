const express = require("express");
const mongoose = require("mongoose");
const app = express();
const keys = require("./config/keys"); // TODO: set to handle environment vars.

mongoose.connect(keys.MONGODB_URL, () => {
  console.log("===== mongodb connected =====");
});

app.get("/", (req, res) => {
  res.send({ name: "chamil udayanga" });
});

app.post("/api/authenticate", (req, res) => {
  res.send({ name: "chamil udayanga, this working" });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log("server started on", PORT);
});

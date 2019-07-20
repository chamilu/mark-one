const express = require("express");
const app = express();

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

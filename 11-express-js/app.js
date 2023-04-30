const express = require("express");
const path = require("path");
const app = express();

app.use(express.static('./public'))

app.get("/", (req, res) => {
  res.status(200).sendFile(path.join(__dirname, "navbar-app", "index.html"));
});

app.all("*", (req, res) => {
  res.status(404).send("Rsources not found");
});

app.listen(5000, () => {
  console.log("Server listening on port 5000...");
});

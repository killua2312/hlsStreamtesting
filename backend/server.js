const express = require("express");
const path = require("path");
const fs = require("fs");
const cors = require("cors");
const app = express();

const PORT = 5000;

app.use(cors());

// app.use("/hlsfiles", express.static(path.join(__dirname, "hlsfiles")));
// app.use("/opAd", express.static(path.join(__dirname, "opAd")));
app.use("/public", express.static(path.join(__dirname, "public")));

app.listen(PORT, () => {
  console.log("Server running");
});

var express = require("express");
var app = express();
const fs = require("fs");
const osutilities = require("./openseautilities.js");

app.listen(process.env.PORT || 8080, () => {
  console.log(`Server running on port ${process.env.PORT || 8080}!`);
});

app.get("/", (req, res, next) => {
  res.send("Hello!");
});

app.get("/getdeals", (req, res, next) => {
  fs.readFile("./data/openseaDeals.json", "utf8", (err, data) => {
    if (err) {
      throw err;
    }
    res.send(JSON.parse(data));
  });
});

app.get("/updateassets", (req, res, next) => {
  osutilities.updateDealsData();
});

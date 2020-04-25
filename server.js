const express = require("express");
const axios = require("axios");
const path = require("path");
const app = express();

app.use(express.static(path.join(__dirname, "build")));
app.get("/", (req, res, next) => {
  const url = "https://api.stocktwits.com/api/2/streams/symbol/AAPL.json";

  try {
    axios
      .get(url)
      .then(data => {
        return res.status(200).json(data.data);
      })
      .catch(err => res.send(err));
  } catch (err) {
    console.error("NN", err);
  }
});

app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

app.listen(process.env.PORT || 8080);

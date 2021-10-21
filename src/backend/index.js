const express = require("express");
const app = express();
const axios = require("axios").default;

const apiKey = "73faabe2b55b90dc0d0c89c4899b2a94";

app.get("/", (req, res) => {
  res.send("Hello world");
});

app.get("/weatherquery/:zip", (req, res) => {
  const config = {
    method: "get",
    url: `https://api.openweathermap.org/data/2.5/weather?zip=${req.params.zip}&appid=${apiKey}`,
    headers: {},
  };

  axios(config)
    .then(function (response) {
      console.log(
        JSON.stringify(response.data),
        res.send(JSON.stringify(response.data.main))
      );
    })
    .catch(function (error) {
      console.log(error);
    });
});

app.listen(80, () => console.log("listening on port 80"));

module.exports = app;

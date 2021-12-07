const express = require("express");
const app = express();
const axios = require("axios").default;

app.get("/", (req, res) => {
  res.send("Hello world");
});

app.get("/weatherquery/:zip", async (req, res) => {
  const apikey = "73faabe2b55b90dc0d0c89c4899b2a94";

  const config = {
    method: "get",
    url: `https://api.openweathermap.org/data/2.5/weather?zip=${req.params.zip}&appid=${apikey}`,
    headers: {},
  };

  const weatherQuery = await axios(config)
    .then(function (response) {
      const { temp, feels_like, temp_min, temp_max, humidity } =
        response.data.main;
      res.send(JSON.stringify(response.data));
      const result = {
        temp: temp,
        feelsLike: feels_like,
        minTemp: temp_min,
        maxTemp: temp_max,
        humidity: humidity,
      };
      return result;
    })
    .catch(function (error) {
      console.log(error);
    });

  //send weatherquery out of scope to be intercepted by other methods
  //so that weather query data may be used
});

app.listen(90, () => console.log("listening on port 90"));

module.exports = app;

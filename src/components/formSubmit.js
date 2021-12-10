import { validate } from "./validateQuery";

const axios = require("axios").default;
const apiKey = "73faabe2b55b90dc0d0c89c4899b2a94";

async function submitQuery(props) {
  //Incase I decide to add aditional parameters such as city, country etc.. I've decided to place the zip property in an object so I can just
  //add additional properties in the submissions object
  const submission = {
    zip: props,
  };

  if (!Number(props))
    throw new Error("The zip code submitted is not a valid number");

  const { error } = await validate(submission);
  if (error) throw new Error(error.message);

  const config = {
    method: "get",
    url: `https://api.openweathermap.org/data/2.5/weather?zip=${props}&appid=${apiKey}`,
    headers: {},
  };

  /*
  const query = await axios(config).then(function (response) {
    const result = response.data;
    return result;
  });

  console.log(query.weather[0].id);
  return query;

  */

  function kelvinToFahrenheit(temp) {
    return Math.round((temp - 273.15) * 1.8 + 32);
  }

  const query = {
    name: "Mount Holly",
    temp: kelvinToFahrenheit(277.65),
    feels_like: kelvinToFahrenheit(277.65),
    temp_min: kelvinToFahrenheit(274.84),
    temp_max: kelvinToFahrenheit(279.23),
    pressure: 1015,
    humidity: 69,
    weatherID: 201,
  };

  return query;
}

export default submitQuery;

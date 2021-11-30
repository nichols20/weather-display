import { validate } from "./validateQuery";

//const axios = require("axios").default;
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

  console.log(`submit query function active ${props}`);

  /*
  const query = await axios(config).then(function (response) {
    const result = response.data.main;
    return result;
  });
  */

  //console.log(query);
  return 4;
}

export default submitQuery;

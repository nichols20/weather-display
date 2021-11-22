const axios = require("axios").default;

async function submitQuery(props) {
  if (!Number(props)) return console.log("this is not a number");
  console.log(props);

  const apiKey = "73faabe2b55b90dc0d0c89c4899b2a94";

  const config = {
    method: "get",
    url: `https://api.openweathermap.org/data/2.5/weather?zip=${props}&appid=${apiKey}`,
    headers: {},
  };

  const query = await axios(config).then(function (response) {
    const result = response.data.main;
    return result;
  });

  console.log(query);
}

export default submitQuery;

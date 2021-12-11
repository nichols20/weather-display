import React from "react";
import "animate.css";

/* To extract the api call data from the getResults promise I need to call this promise inside of a lifecycle hook.
Which means I wil have to change this WeatherCard stateless component into a class component*/

class WeatherCard extends React.Component {
  constructor() {
    super();
    this.state = { data: [], error: false };
  }

  //Calling a promise inside of the didMount lifecycle hook so that I can retrieve promise data before page finalizes render
  async componentDidMount() {
    //Using window.location to grab the zipCode user submitted in the searchbar
    const search = window.location.pathname.split("/");

    //I placed the promise inside of a try catch block so that when an error is thrown during validation the catch can return it and display
    //it in the DOM for the user
    try {
      const result = await this.props.getResults(search[2]);
      console.log("success result");
      console.log(result);
      this.setState({
        data: [
          result.name,
          result.temp,
          result.feels_like,
          result.temp_min,
          result.temp_max,
          result.humidity,
          result.weatherID,
        ],
      });
    } catch (ex) {
      return this.setState({ data: [ex.message], error: true });
    }
  }

  //Creating a function to dynamically set the className of the weatherCard
  //dependant on the result of the weatherID returned from the weather API
  weatherClass(ID) {
    if (ID > 199 && ID < 233) return "weatherCard  weather-thunderstorm";
    else if (ID > 299 && ID < 322) return "weatherCard  weather-drizzle";
    else if (ID > 499 && ID < 532) return "weatherCard  weather-rain";
    else if (ID > 599 && ID < 623) return "weatherCard  weather-snow";
    else if (ID > 800 && ID < 805) return "weatherCard weather-cloudy ";
    else if (ID === 800) return "weatherCard weather-clear";
    else {
      return "weatherCard";
    }
  }

  returnJSX() {
    const { data, error } = this.state;

    if (error) return <div className="reportError">{data}</div>;

    return (
      <div className={this.weatherClass(data[6])}>
        <h1 className="queryLocation">{data[0]}</h1>
        <div className="temp">
          {data[1]}
          <span className="tempIcon"></span>
        </div>
        <div className="temp_min">L:{data[3]}</div>
        <div className="temp_max">H:{data[4]}</div>
        <div className="feels_like">
          <p className=" animate__animated animate__lightSpeedInLeft animate__delay-1s">
            Feels Like
          </p>
          <div className="feels_temp animate__animated animate__fadeIn animate__delay-1s">
            {data[2]}
          </div>
          <span className="feelsLikeIcon animate__animated animate__fadeIn animate__delay-1s"></span>
        </div>
        <div className="humidity">
          <p>Humidity</p> <div>{data[5]}%</div>
        </div>
      </div>
    );
  }

  render() {
    return <div>{this.returnJSX()}</div>;
  }
}

export default WeatherCard;

/*
{this.state.data.map((data) => (
  <div key="weatherQuery">{data}</div>
))}
const WeatherCard = ({ getResults }) => {
  const result = React.useEffect(async () => {
    const result = await getResults();
    return result;
  });

  return <div></div>;
};

export default WeatherCard;

*/

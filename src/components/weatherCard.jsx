import React from "react";

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
        ],
      });
    } catch (ex) {
      return this.setState({ data: [ex.message], error: true });
    }
  }

  returnJSX() {
    const { data, error } = this.state;

    if (error) return <div className="reportError">{data}</div>;

    return (
      <div className="weatherCard">
        <h1 className="queryLocation">{data[0]}</h1>
        <div className="temp">
          {data[1]}
          <span className="tempIcon"></span>
        </div>
        <div className="temp_max">H:{data[4]}</div>
      </div>
    );
  }

  render() {
    return <div>{this.returnJSX()}</div>;
  }
}

export default WeatherCard;

/*
<div className="temp_min">{data[3]}</div>
        <div className="feels_like">
          <p>Feels Like:</p>
          {data[2]}
        </div>
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

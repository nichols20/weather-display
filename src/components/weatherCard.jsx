import { isError, types } from "joi";
import React from "react";

/* To extract the api call data from the getResults promise I need to call this promise inside of a lifecycle hook.
Which means I wil have to change this WeatherCard stateless component into a class component*/

class WeatherCard extends React.Component {
  constructor() {
    super();
    this.state = { data: [] };
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
      return result;
    } catch (ex) {
      return this.setState({ data: [ex.message] });
    }
  }

  render() {
    console.log(this.state.data);
    return (
      <div>
        {this.state.data.map((data) => (
          <div key="weatherQuery">{data}</div>
        ))}
      </div>
    );
  }
}

export default WeatherCard;

/*
const WeatherCard = ({ getResults }) => {
  const result = React.useEffect(async () => {
    const result = await getResults();
    return result;
  });

  return <div></div>;
};

export default WeatherCard;

*/

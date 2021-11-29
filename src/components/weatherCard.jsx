import React from "react";

/* To extract the api call data from the getResults promise I need to call this promise inside of a lifecycle hook.
Which means I wil have to change this WeatherCard stateless component into a class component*/

class WeatherCard extends React.Component {
  constructor() {
    super();
    this.state = { data: [] };
  }

  async componentDidMount() {
    const result = await this.props.getResults();
    this.setState({ data: [result] });
  }

  render() {
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

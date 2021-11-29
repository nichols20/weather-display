import React from "react";
import submitQuery from "./formSubmit";
import WeatherCard from "./weatherCard";

class WeatherReport extends React.Component {
  getResults = async () => {
    const result = await submitQuery("08060");
    return result;
  };

  render() {
    return (
      <div className="reportContainer">
        <WeatherCard getResults={this.getResults} />
      </div>
    );
  }
}

export default WeatherReport;

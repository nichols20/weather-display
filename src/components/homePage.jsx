import React from "react";
import SearchBar from "./searchbar";

class HomePage extends React.Component {
  render() {
    return (
      <div className="header">
        <h1>Welcome to my weather app</h1>
        <SearchBar />
      </div>
    );
  }
}

export default HomePage;

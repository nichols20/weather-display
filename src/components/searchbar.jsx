import React, { Component } from "react";

class SearchBar extends Component {
  render() {
    return (
      <div>
        <input type="text" className="weatherSearch" />
        <button className="searchButton"> Submit</button>
      </div>
    );
  }
}

export default SearchBar;

//<input type="submit" />

import React, { Component } from "react";

class SearchBar extends Component {
  render() {
    return (
      <span className="searchBar">
        <input type="text" className="weatherSearch" />
        <button className="searchButton"> Submit</button>
      </span>
    );
  }
}

export default SearchBar;

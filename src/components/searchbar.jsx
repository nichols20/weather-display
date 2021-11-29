import React, { Component } from "react";

class SearchBar extends Component {
  render() {
    return (
      <span className="searchBar">
        <input type="text" className="weatherSearch" id="weatherSearch" />
        <button
          className="searchButton"
          onClick={() => {
            const searchValue = document.getElementById("weatherSearch").value;
            window.location = `/weatherquery/${searchValue}`;
          }}
        >
          Submit
        </button>
      </span>
    );
  }
}

export default SearchBar;

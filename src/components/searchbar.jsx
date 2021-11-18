import React, { Component } from "react";
import submitQuery from "./formSubmit";

class SearchBar extends Component {
  render() {
    return (
      <span className="searchBar">
        <input type="text" className="weatherSearch" id="weatherSearch" />
        <button
          className="searchButton"
          onClick={() => {
            const searchValue = document.getElementById("weatherSearch").value;
            submitQuery(searchValue);
          }}
        >
          Submit
        </button>
      </span>
    );
  }
}

export default SearchBar;

import "./App.css";
import React from "react";
import SearchBar from "./components/searchbar";

function App() {
  return (
    <div className="header">
      <h1>Welcome to my weather app</h1>
      <SearchBar />
    </div>
  );
}

export default App;

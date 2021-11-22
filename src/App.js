import "./App.css";
import React from "react";
import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom";
import HomePage from "./components/homePage";
import WeatherReport from "./components/weatherReport";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/weatherquery/:zip" element={<WeatherReport />} />
          <Route path="/weatherquery" element={<HomePage />} />
          <Route path="*" element={<Navigate to="/weatherquery" />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

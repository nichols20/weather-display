import "./App.css";
import React from "react";
import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom";
import HomePage from "./components/homePage";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/weatherQuery" element={<HomePage />} />
          <Route path="*" element={<Navigate to="/weatherquery" />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

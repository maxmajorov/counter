import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { CounterContainer } from "./components/Counter/CounterContainer";
import { CounterFull } from "./components/CounterFull/CounterFull";
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";

const App = () => {
  // const setStartValueCallback = () => {
  //   setCount(startValue);
  //   localStorage.setItem("maxValue", JSON.stringify(maxValue));
  //   localStorage.setItem("startValue", JSON.stringify(startValue));
  //   setError("");
  // };

  return (
    <BrowserRouter>
      <div className="container">
        <Header />
        <Sidebar />
        <div className="container-content">
          <Routes>
            <Route
              path="/counter_v1.0.0"
              element={
                <div className="counter-container">
                  <CounterContainer />
                </div>
              }
            />
            <Route
              path="/counter_v2.0/*"
              element={
                <div className="counter-container">
                  <CounterFull />
                </div>
              }
            ></Route>
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;

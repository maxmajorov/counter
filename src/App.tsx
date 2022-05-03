import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Counter from "./components/Counter/Counter";
import { CounterFull } from "./components/CounterFull/CounterFull";
import CounterSettings from "./components/CounterSettings/CounterSettings";
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";

const App = () => {
  const [count, setCount] = useState<number>(0);
  const [maxValue, setMaxValue] = useState<number>(() => {
    const savedMaxValue = localStorage.getItem("maxValue");
    return savedMaxValue ? JSON.parse(savedMaxValue) : 0;
  });
  const [startValue, setStartValue] = useState<number>(() => {
    const savedStartValue = localStorage.getItem("startValue");
    return savedStartValue ? JSON.parse(savedStartValue) : 0;
  });

  const [error, setError] = useState<string>("enter values and press 'set'");

  const getMaxValueCallback = (maxValue: number) => {
    setMaxValue(maxValue);
    maxValue < 0 || maxValue === startValue || maxValue < startValue
      ? setError("incorrect values!")
      : setError("enter values and press 'set'");
    setCount(0);
  };

  const getStartValueCallback = (startValue: number) => {
    setStartValue(startValue);
    startValue < 0 || startValue > maxValue || maxValue === startValue
      ? setError("incorrect values!")
      : setError("enter values and press 'set'");
    setCount(0);
  };

  const setStartValueCallback = () => {
    setCount(startValue);
    localStorage.setItem("maxValue", JSON.stringify(maxValue));
    localStorage.setItem("startValue", JSON.stringify(startValue));
    setError("");
  };

  console.log(error);

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
                  <CounterSettings
                    error={error}
                    maxValue={maxValue}
                    startValue={startValue}
                    setStartValue={setStartValueCallback}
                    getMaxValue={getMaxValueCallback}
                    getStartValue={getStartValueCallback}
                  />
                  <Counter
                    count={count}
                    error={error}
                    setCount={setCount}
                    maxValue={maxValue}
                    startValue={startValue}
                  />
                </div>
              }
            />
            <Route
              path="/counter_v2.0/*"
              element={
                <div className="counter-container">
                  <CounterFull
                    count={count}
                    error={error}
                    maxValue={maxValue}
                    startValue={startValue}
                    setCount={setCount}
                    setStartValue={setStartValueCallback}
                    getMaxValue={getMaxValueCallback}
                    getStartValue={getStartValueCallback}
                  />
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

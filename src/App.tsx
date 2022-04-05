import React, { useState } from "react";
import "./App.css";
import Counter from "./components/Counter/Counter";
import CounterSettings from "./components/CounterSettings/CounterSettings";

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
    <div className="inner">
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
  );
};

export default App;

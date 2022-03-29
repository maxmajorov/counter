import React, { useState } from "react";
import "./App.css";
import Counter from "./components/Counter/Counter";
import CounterSettings from "./components/CounterSettings/CounterSettings";

const App = () => {
  const [count, setCount] = useState<number>(0);
  const [maxValue, setMaxValue] = useState<number>(0);
  const [startValue, setStartValue] = useState<number>(0);
  const [error, setError] = useState<string>("");

  const getMaxValueCallback = (maxValue: number) => {
    setMaxValue(maxValue);
    maxValue === 0 ? setError("enter values and press 'set'") : setError("");
  };

  const getStartValueCallback = (startValue: number) => {
    setStartValue(startValue);
    startValue === 0
      ? setError("enter values and press 'set'")
      : startValue < 0
      ? setError("Incorrect value!")
      : setError("");
  };

  const setStartValueCallback = () => {
    setCount(startValue);
    // errors();
  };

  // const errors = () => {
  //   startValue > maxValue || !startValue || startValue < 0
  //     ? setError("Incorrect value!")
  //     : setError("enter values and press 'set'");
  // };

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

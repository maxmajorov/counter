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
  };

  const getStartValueCallback = (startValue: number) => {
    setStartValue(startValue);
    console.log(startValue);
  };

  const setStartValueCallback = () => {
    setCount(startValue);
  };

  console.log(error);

  return (
    <div className="inner">
      <CounterSettings
        error={error}
        setError={setError}
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
        setStartValues={setStartValueCallback}
      />
    </div>
  );
};

export default App;

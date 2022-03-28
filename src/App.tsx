import React, { useState } from "react";
import "./App.css";
import Counter from "./components/Counter/Counter";
import CounterSettings from "./components/CounterSettings/CounterSettings";

const App = () => {
  const [count, setCount] = useState<number>(0);
  const [maxValue, setMaxValue] = useState<number>(0);
  const [startValue, setStartValue] = useState<number>(0);
  const [infoMes, setInfoMes] = useState<string>(
    "enter values and press 'set'"
  );

  const getMaxValueCallback = (maxValue: number) => {
    setMaxValue(maxValue);
  };

  const getStartValueCallback = (startValue: number) => {
    setStartValue(startValue);
    // setCount(startValue);
  };

  const setStartValueCallback = () => {
    setCount(startValue);
  };
  console.log(maxValue, startValue);

  return (
    <div className="inner">
      <CounterSettings
        setStartValue={setStartValueCallback}
        getMaxValue={getMaxValueCallback}
        getStartValue={getStartValueCallback}
      />
      <Counter
        count={count}
        setCount={setCount}
        maxValue={maxValue}
        startValue={startValue}
        infoMes={infoMes}
      />
    </div>
  );
};

export default App;

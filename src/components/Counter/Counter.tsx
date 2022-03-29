import React from "react";
import ButtonCounter from "../Buttons/ButtonCounter";
import classes from "./Counter.module.css";

type CounterPropsType = {
  count: number;
  maxValue: number;
  startValue: number;
  error: string;
  setCount: (count: number) => void;
};

const Counter: React.FC<CounterPropsType> = ({
  count,
  error,
  setCount,
  maxValue,
  startValue,
}) => {
  let disabled_1 = false;
  let disabled_2 = !(count > 0) ? true : false;
  let numberColor = "";

  const setCountCallback = () => {
    setCount(++count);
  };

  const reset = () => {
    setCount(startValue);
  };

  let counterInfo: string = "";
  if (count === 0 || startValue > maxValue) {
    counterInfo = error;
  } else if (count) {
    counterInfo = count.toString();
  }
  if (count >= maxValue) {
    numberColor = `${classes.redSpan}`;
    disabled_1 = true;
  }

  return (
    <div className={classes.counter}>
      <div className={classes.number}>
        <span className={numberColor}>{counterInfo}</span>
      </div>
      <div className={classes.buttons}>
        <ButtonCounter setCount={setCountCallback} disabled={disabled_1}>
          INC
        </ButtonCounter>
        <ButtonCounter setCount={reset} disabled={disabled_2}>
          RESET
        </ButtonCounter>
      </div>
    </div>
  );
};

export default Counter;

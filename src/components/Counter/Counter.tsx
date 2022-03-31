import React from "react";
import ButtonCounter from "../Buttons/ButtonCounter";
import classes from "./Counter.module.css";

type CounterPropsType = {
  count: number;
  maxValue: number;
  startValue: number;
  error: string;
  setCount: (count: number) => void;
  setStartValues: () => void;
};

const Counter: React.FC<CounterPropsType> = ({
  count,
  error,
  setCount,
  maxValue,
  startValue,
}) => {
  let disabled_1 = count >= maxValue ? true : false; //
  let disabled_2 = !(count > startValue) ? true : false;
  let infoColor = "";

  const setCountCallback = () => {
    setCount(++count);
  };

  const reset = () => {
    setCount(startValue);
  };

  let counterInfo: string = !count
    ? "enter values and press 'set'"
    : count.toString();

  if (error) {
    counterInfo = error;
    infoColor = `${classes.redSpan}`;
  }

  if (count === maxValue) {
    infoColor = `${classes.redSpan}`;
  }

  return (
    <div className={classes.counter}>
      <div className={classes.number}>
        <span className={infoColor}>{counterInfo}</span>
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

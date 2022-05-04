import React from "react";
import { initialStateType } from "../../reducers/counter-reducer";
import ButtonCounter from "../Buttons/ButtonCounter";
import classes from "./Counter.module.css";

type CounterPropsType = {
  error: string;
  counterState: initialStateType;
  increment: () => void;
  reset: () => void;
};

const Counter: React.FC<CounterPropsType> = ({
  error,
  counterState,
  increment,
  reset,
}) => {
  let disabled_1 =
    error !== "" || counterState.counter >= counterState.maxValue;
  let disabled_2 = !counterState.counter;
  let infoColor: string = "";
  let counterInfo: string = "";

  counterInfo = error.length === 0 ? counterState.counter.toString() : error;

  if (error === "incorrect values!") {
    counterInfo = error;
    infoColor = `${classes.redSpan}`;
  }

  if (counterState.counter === counterState.maxValue) {
    infoColor = `${classes.redSpan}`;
  }

  return (
    <div className={classes.counter}>
      <div className={classes.number}>
        <span className={infoColor}>{counterInfo}</span>
      </div>
      <div className={classes.buttons}>
        <ButtonCounter setCount={increment} disabled={disabled_1}>
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

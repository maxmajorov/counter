import React from "react";
import { Link, Outlet, Route, Routes } from "react-router-dom";
import ButtonCounter from "../../Buttons/ButtonCounter";

import classes from "./CounterInfo.module.css";

type CounterInfoPropsType = {
  count: number;
  maxValue: number;
  startValue: number;
  error: string;
  setCount: (count: number) => void;
};

export const CounterInfo: React.FC<CounterInfoPropsType> = ({
  count,
  error,
  setCount,
  maxValue,
  startValue,
}) => {
  let disabled_1 = error !== "" || count >= maxValue;
  let disabled_2 = !count;
  let infoColor: string = "";
  let counterInfo: string = "";

  const setCountCallback = () => {
    setCount(++count);
  };

  const reset = () => {
    setCount(startValue);
  };

  counterInfo = error.length === 0 ? count.toString() : error;

  if (error === "incorrect values!") {
    counterInfo = error;
    infoColor = `${classes.redSpan}`;
  }

  if (count === maxValue) {
    infoColor = `${classes.redSpan}`;
  }
  const onClickCallback = () => {
    console.log("change");

    // return <Outlet />;
  };

  return (
    <div className={classes.counter}>
      <div className={classes.number}>
        <span className={infoColor}>{counterInfo}</span>
      </div>
      {onClickCallback}
      <div className={classes.buttons}>
        <ButtonCounter setCount={setCountCallback} disabled={disabled_1}>
          INC
        </ButtonCounter>
        <ButtonCounter setCount={reset} disabled={disabled_2}>
          RESET
        </ButtonCounter>
        {/* <button>
          <Link to="settings">set</Link> */}
        {/* <Link to="counterinfo">back</Link> */}
        {/* </button> */}
      </div>
    </div>
  );
};

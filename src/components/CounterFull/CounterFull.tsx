import React from "react";
import { Link, Outlet, Route, Routes } from "react-router-dom";
import ButtonCounter from "../Buttons/ButtonCounter";
import CounterSettings from "../CounterSettings/CounterSettings";
import classes from "./CounterFull.module.css";
import { CounterInfo } from "./CounterInfo/CounterInfo";
import { Settings } from "./Settings/Settings";

type CounterFullPropsType = {
  count: number;
  maxValue: number;
  startValue: number;
  error: string;
  setCount: (count: number) => void;
  setStartValue: () => void;
  getMaxValue: (value: number) => void;
  getStartValue: (value: number) => void;
};

export const CounterFull: React.FC<CounterFullPropsType> = ({
  count,
  error,
  setCount,
  maxValue,
  startValue,
  getMaxValue,
  getStartValue,
  setStartValue,
}) => {
  let disabled_1 = error !== "" || count >= maxValue;
  let disabled_2 = !count;
  let disabled_3 = false;
  let infoColor: string = "";
  let counterInfo: string = "";

  const setCountCallback = () => {
    setCount(++count);
  };

  const reset = () => {
    setCount(startValue);
  };

  const getMaxValueCallback = (maxValue: number) => {
    getMaxValue(maxValue);
  };

  const getStartValueCallback = (startValue: number) => {
    getStartValue(startValue);
  };

  const setValues = () => {
    setStartValue();
  };

  counterInfo = error.length === 0 ? count.toString() : error;

  if (error === "incorrect values!") {
    counterInfo = error;
    infoColor = `${classes.redSpan}`;
  }

  if (count === maxValue) {
    infoColor = `${classes.redSpan}`;
  }

  return (
    <div className={classes.counter}>
      <Outlet />
      {/* <CounterInfo
        count={count}
        error={error}
        maxValue={maxValue}
        startValue={startValue}
        setCount={setCount}
      /> */}
      <button>
        <Link to="">back</Link>
      </button>
      <button>
        <Link to="settings">back</Link>
      </button>
    </div>
  );
};

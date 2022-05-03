import React, { useState } from "react";
import ButtonCounter from "../Buttons/ButtonCounter";
import InputField from "../CounterSettings/InputField/InputField";
import classes from "./CounterFull.module.css";

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
  const [settings, setSettings] = useState<boolean>(true);
  console.log(settings);

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

  const setStartValueAndGoBack = () => {
    setStartValue();
    setSettings(!settings);
  };

  const toogleHandler = () => {
    setSettings(!settings);
  };

  const maxInputError = (): boolean => maxValue === startValue || maxValue < 0;
  const startInputError = (): boolean =>
    startValue < 0 || startValue > maxValue || maxValue === startValue;

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
      {settings ? (
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
            <ButtonCounter setCount={toogleHandler} disabled={disabled_3}>
              SET
            </ButtonCounter>
          </div>
        </div>
      ) : (
        <div className={classes.counter}>
          <InputField
            title="max value:"
            inputError={maxInputError}
            inputValue={maxValue}
            getCountValues={getMaxValueCallback}
          />
          <InputField
            title="start value:"
            inputError={startInputError}
            inputValue={startValue}
            getCountValues={getStartValueCallback}
          />
          <div className={classes.buttons}>
            <ButtonCounter setCount={setStartValueAndGoBack}>set</ButtonCounter>
          </div>
        </div>
      )}
    </div>
  );
};

import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import ButtonCounter from "../../Buttons/ButtonCounter";
import InputField from "../../CounterSettings/InputField/InputField";
import classes from "./Settings.module.css";

type CounterFullPropsType = {
  maxValue: number;
  startValue: number;
  getMaxValue: (value: number) => void;
  getStartValue: (value: number) => void;
};

export const Settings: React.FC<CounterFullPropsType> = ({
  maxValue,
  startValue,
  getMaxValue,
  getStartValue,
}) => {
  let disabled_3 = false;

  const getMaxValueCallback = (maxValue: number) => {
    getMaxValue(maxValue);
  };

  const getStartValueCallback = (startValue: number) => {
    getStartValue(startValue);
  };

  const maxInputError = (): boolean => maxValue === startValue || maxValue < 0;
  const startInputError = (): boolean =>
    startValue < 0 || startValue > maxValue || maxValue === startValue;

  return (
    <div className={classes.counter}>
      <div>
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
      </div>
      <ButtonCounter setCount={() => {}} disabled={disabled_3}>
        SET
      </ButtonCounter>
      {/* <button>
        <Link to="/counter_v2.0/counterinfo">back</Link>
      </button> */}
    </div>
  );
};

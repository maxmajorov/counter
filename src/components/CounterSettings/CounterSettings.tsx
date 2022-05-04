import React from "react";
import ButtonCounter from "../Buttons/ButtonCounter";
import classes from "./CounterSettings.module.css";
import InputField from "./InputField/InputField";

type CounterSettingsPropsType = {
  maxValue: number;
  startValue: number;
  getMaxValue: (maxValue: number) => void;
  getStartValue: (startValue: number) => void;
  setValues: (startValue: number, maxValue: number) => void;
};

export const CounterSettings: React.FC<CounterSettingsPropsType> = ({
  maxValue,
  startValue,
  getMaxValue,
  getStartValue,
  setValues,
}) => {
  let disabledWithoutValues: boolean =
    maxValue <= 0 || startValue < 0 || startValue >= maxValue ? true : false;

  // === Callbacks =====

  const setValuesCallback = () => {
    setValues(startValue, maxValue);
  };

  const setMaxValueCallback = (maxValue: number) => {
    getMaxValue(maxValue);
  };

  const setStartValueCallback = (startValue: number) => {
    getStartValue(startValue);
  };

  const maxInputError = (): boolean => maxValue === startValue || maxValue < 0;
  const startInputError = (): boolean =>
    startValue < 0 || startValue > maxValue || maxValue === startValue;

  return (
    <div className={classes.counter}>
      <InputField
        title="max value:"
        value={maxValue}
        inputError={maxInputError}
        setCountValues={setMaxValueCallback}
      />
      <InputField
        title="start value:"
        value={startValue}
        inputError={startInputError}
        setCountValues={setStartValueCallback}
      />
      <div className={classes.buttons}>
        <ButtonCounter
          setCount={setValuesCallback}
          disabled={disabledWithoutValues}
        >
          set
        </ButtonCounter>
      </div>
    </div>
  );
};

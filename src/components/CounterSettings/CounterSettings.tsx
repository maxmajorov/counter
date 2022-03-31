import React from "react";
import ButtonCounter from "../Buttons/ButtonCounter";
import classes from "./CounterSettings.module.css";
import InputField from "./InputField/InputField";

type CounterSettingsPropsType = {
  error: string;
  maxValue: number;
  startValue: number;
  setError: (error: string) => void;
  setStartValue: () => void;
  getMaxValue: (value: number) => void;
  getStartValue: (value: number) => void;
};

const CounterSettings: React.FC<CounterSettingsPropsType> = ({
  error,
  setError,
  maxValue,
  startValue,
  setStartValue,
  getMaxValue,
  getStartValue,
}) => {
  let disabledWithoutValues: boolean =
    maxValue <= 0 || startValue < 0 || error ? true : false;

  const getMaxValueCallback = (maxValue: number) => {
    getMaxValue(maxValue);
    maxValue < 0 ? setError("incorrect values!") : setError("");
  };

  const getStartValueCallback = (startValue: number) => {
    getStartValue(startValue);
    startValue < 0 || startValue > maxValue || maxValue === startValue
      ? setError("incorrect values!")
      : setError("");
  };

  const maxInputError = (): boolean => maxValue === startValue || maxValue < 0;
  const startInputError = (): boolean =>
    startValue < 0 || startValue > maxValue || maxValue === startValue;

  return (
    <div className={classes.counter}>
      <InputField
        inputError={maxInputError}
        inputValue={maxValue}
        title="max value:"
        getCountValues={getMaxValueCallback}
      />
      <InputField
        inputError={startInputError}
        inputValue={startValue}
        title="start value:"
        getCountValues={getStartValueCallback}
      />
      <div className={classes.buttons}>
        <ButtonCounter
          setCount={() => setStartValue()}
          disabled={disabledWithoutValues}
        >
          set
        </ButtonCounter>
      </div>
    </div>
  );
};

export default CounterSettings;

import React from "react";
import ButtonCounter from "../Buttons/ButtonCounter";
import classes from "./CounterSettings.module.css";
import InputField from "./InputField/InputField";

type CounterSettingsPropsType = {
  error: string;
  maxValue: number;
  startValue: number;
  setStartValue: () => void;
  getMaxValue: (value: number) => void;
  getStartValue: (value: number) => void;
};

const CounterSettings: React.FC<CounterSettingsPropsType> = ({
  error,
  maxValue,
  startValue,
  setStartValue,
  getMaxValue,
  getStartValue,
}) => {
  let disabledWithoutValues: boolean =
    maxValue && startValue > 0 ? false : true;

  const getMaxValueCallback = (maxValue: number) => {
    getMaxValue(maxValue); //Получили максимальное значение
  };

  const getStartValueCallback = (startValue: number) => {
    getStartValue(startValue); //Получили start value
  };

  const setCountInputValues = () => {
    setStartValue();
  };

  return (
    <div className={classes.counter}>
      <InputField
        error={error}
        title="max value:"
        maxValue={maxValue}
        startValue={startValue}
        getCount={getMaxValueCallback}
      />
      <InputField
        error={error}
        title="start value:"
        maxValue={maxValue}
        startValue={startValue}
        getCount={getStartValueCallback}
      />
      <div className={classes.buttons}>
        <ButtonCounter
          setCount={setCountInputValues}
          disabled={disabledWithoutValues}
        >
          set
        </ButtonCounter>
      </div>
    </div>
  );
};

export default CounterSettings;

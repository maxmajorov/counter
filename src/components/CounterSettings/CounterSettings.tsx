import React from "react";
import ButtonCounter from "../Buttons/ButtonCounter";
import classes from "./CounterSettings.module.css";
import InputField from "./InputField/InputField";

type CounterSettingsPropsType = {
  setStartValue: () => void;
  getMaxValue: (value: number) => void;
  getStartValue: (value: number) => void;
};

const CounterSettings: React.FC<CounterSettingsPropsType> = ({
  setStartValue,

  getMaxValue,
  getStartValue,
}) => {
  const getMaxValueCallback = (maxValue: number) => {
    getMaxValue(maxValue); //Получили максимальное значение
  };

  const getStartValueCallback = (startValue: number) => {
    getStartValue(startValue); //Получили start value
    // console.log(startValue);
  };

  const setCountInputValues = () => {
    console.log("set");
    setStartValue();
  };

  return (
    <div className={classes.counter}>
      <InputField getCount={getMaxValueCallback} title="max value:" />
      <InputField getCount={getStartValueCallback} title="start value:" />
      <div className={classes.buttons}>
        <ButtonCounter setCount={setCountInputValues}>set</ButtonCounter>
      </div>
    </div>
  );
};

export default CounterSettings;

import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import {
  incrementAC,
  resetCounterAC,
  setValuesAC,
} from "../../actions/counter-actions";
import { AppStateType } from "../../redux/redux-store";
import ButtonCounter from "../Buttons/ButtonCounter";
import { CounterSettings } from "../CounterSettings/CounterSettings";
import classes from "./CounterFull.module.css";

export const CounterFull: React.FC = () => {
  const [maxValue, setMaxValue] = useState<number>(0);
  const [startValue, setStartValue] = useState<number>(0);
  const [error, setError] = useState<string>("enter values and press 'set'");
  const [settings, setSettings] = useState<boolean>(true);

  const counterState = useSelector(
    (state: AppStateType) => state.counterReducer
  );
  const dispatch = useDispatch();

  const setValuesCallback = (startValue: number, maxValue: number) => {
    dispatch(setValuesAC(startValue, maxValue));
    setError("");
    setSettings(!settings);
  };

  const getMaxValueCallback = (maxValue: number) => {
    setMaxValue(maxValue);
    maxValue < 0 || maxValue === startValue || maxValue < startValue
      ? setError("incorrect values!")
      : setError("enter values and press 'set'");
  };

  const getStartValueCallback = (startValue: number) => {
    setStartValue(startValue);
    startValue < 0 || startValue > maxValue || maxValue === startValue
      ? setError("incorrect values!")
      : setError("enter values and press 'set'");
  };

  const incrementCounterCallback = () => {
    dispatch(incrementAC());
  };

  const resetCounterCallback = () => {
    dispatch(resetCounterAC(startValue));
  };

  let disabled_1 =
    error !== "" || counterState.counter >= counterState.maxValue;
  let disabled_2 = !counterState.counter;
  let disabled_3 = false;
  let infoColor: string = "";
  let counterInfo: string = "";

  const toogleHandler = () => {
    setSettings(!settings);
  };

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
      {settings ? (
        <div className={classes.counter}>
          <div className={classes.number}>
            <span className={infoColor}>{counterInfo}</span>
          </div>
          <div className={classes.buttons}>
            <ButtonCounter
              setCount={incrementCounterCallback}
              disabled={disabled_1}
            >
              INC
            </ButtonCounter>
            <ButtonCounter
              setCount={resetCounterCallback}
              disabled={disabled_2}
            >
              RESET
            </ButtonCounter>
            <ButtonCounter setCount={toogleHandler} disabled={disabled_3}>
              SET
            </ButtonCounter>
          </div>
        </div>
      ) : (
        <CounterSettings
          maxValue={maxValue}
          startValue={startValue}
          setValues={setValuesCallback}
          getMaxValue={getMaxValueCallback}
          getStartValue={getStartValueCallback}
        />
      )}
    </div>
  );
};

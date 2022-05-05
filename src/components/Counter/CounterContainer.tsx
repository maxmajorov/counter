import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import {
  incrementAC,
  resetCounterAC,
  setValuesAC,
} from "../../actions/counter-actions";
import { AppStateType } from "../../redux/redux-store";
import { CounterSettings } from "../CounterSettings/CounterSettings";
import Counter from "./Counter";

export const CounterContainer = () => {
  const counterState = useSelector(
    (state: AppStateType) => state.counterReducer
  );
  const dispatch = useDispatch();

  const [maxValue, setMaxValue] = useState<number>(counterState.maxValue); //беру из localStore
  const [startValue, setStartValue] = useState<number>(counterState.startValue);
  const [error, setError] = useState<string>("enter values and press 'set'");

  // ====== save in localStarage ======

  // localStorage.setItem("maxValue", JSON.stringify(maxValue));
  // localStorage.setItem("startValue", JSON.stringify(startValue));

  const setValuesCallback = (startValue: number, maxValue: number) => {
    dispatch(setValuesAC(startValue, maxValue));
    setError("");
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

  return (
    <>
      <Counter
        error={error}
        counterState={counterState}
        increment={incrementCounterCallback}
        reset={resetCounterCallback}
      />
      <CounterSettings
        maxValue={maxValue}
        startValue={startValue}
        setValues={setValuesCallback}
        getMaxValue={getMaxValueCallback}
        getStartValue={getStartValueCallback}
      />
    </>
  );
};

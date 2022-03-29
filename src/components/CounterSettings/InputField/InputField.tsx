import React, { ChangeEvent } from "react";
import classes from "./InputField.module.css";

type InputFieldPropsType = {
  error: string;
  maxValue: number;
  startValue: number;
  title: string;

  getCount: (value: number) => void;
};

const InputField: React.FC<InputFieldPropsType> = ({
  error,
  maxValue,
  startValue,
  title,
  getCount,
}) => {
  const inputValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
    getCount(+e.currentTarget.value);
  };

  const finalInputClassName = `${classes.input} ${classes.input_invalid} ${
    error ? "" : classes.input_valid
  }`;

  return (
    <div className={classes.inputField}>
      <div className={classes.field}>
        <span>{title}</span>
        <input
          type="number"
          placeholder="0"
          className={finalInputClassName}
          onChange={inputValueHandler}
        ></input>
      </div>
    </div>
  );
};

export default InputField;

import React, { ChangeEvent } from "react";
import classes from "./InputField.module.css";

type InputFieldPropsType = {
  title: string;
  inputValue: number;
  inputError: () => boolean;
  getCountValues: (value: number) => void;
};

const InputField: React.FC<InputFieldPropsType> = ({
  title,
  inputValue,
  inputError,
  getCountValues,
}) => {
  const inputValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
    getCountValues(+e.currentTarget.value);
  };

  const finalInputClassName = `${classes.input} ${classes.input_invalid} ${
    inputError() ? "" : classes.input_valid
  }`;

  return (
    <div className={classes.inputField}>
      <div className={classes.field}>
        <span>{title}</span>
        <input
          type={"number"}
          value={inputValue}
          className={finalInputClassName}
          onChange={inputValueHandler}
        ></input>
      </div>
    </div>
  );
};

export default InputField;

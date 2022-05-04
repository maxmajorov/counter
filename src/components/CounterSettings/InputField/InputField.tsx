import React, { ChangeEvent } from "react";
import classes from "./InputField.module.css";

type InputFieldPropsType = {
  title: string;
  value: number;
  inputError: () => boolean;
  setCountValues: (value: number) => void;
};

const InputField: React.FC<InputFieldPropsType> = ({
  title,
  value,
  inputError,
  setCountValues,
}) => {
  const inputValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setCountValues(+e.currentTarget.value);
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
          value={value}
          className={finalInputClassName}
          onChange={inputValueHandler}
        ></input>
      </div>
    </div>
  );
};

export default InputField;

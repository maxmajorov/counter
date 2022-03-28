import React, { ChangeEvent } from "react";
import classes from "./InputField.module.css";

type InputFieldPropsType = {
  title: string;
  getCount: (value: number) => void;
};

const InputField: React.FC<InputFieldPropsType> = ({ title, getCount }) => {
  const inputValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
    getCount(+e.currentTarget.value);
  };

  return (
    <div className={classes.inputField}>
      <div className={classes.field}>
        <span>{title}</span>
        <input
          type="number"
          placeholder="0"
          className={classes.input}
          onChange={inputValueHandler}
        ></input>
      </div>
    </div>
  );
};

export default InputField;

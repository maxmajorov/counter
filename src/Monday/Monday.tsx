import React, { useState } from "react";
import ButtonCounter from "./Buttons/ButtonCounter";
import classes from "./Monday.module.css";

const Monday = () => {
  let [count, setCount] = useState<number>(0);

  let disabled_1 = false;
  let disabled_2 = !(count > 0) ? true : false;
  let numberColor = "";

  const setCountCallback = () => {
    setCount(++count);
  };

  const reset = () => {
    setCount(0);
  };

  if (count >= 5) {
    numberColor = `${classes.redSpan}`;
    disabled_1 = true;
  }

  return (
    <div className={classes.counter}>
      <div className={classes.number}>
        <span className={numberColor}>{count}</span>
      </div>
      <div className={classes.buttons}>
        <ButtonCounter setCount={setCountCallback} disabled={disabled_1}>
          INC
        </ButtonCounter>
        <ButtonCounter setCount={reset} disabled={disabled_2}>
          RESET
        </ButtonCounter>
      </div>
    </div>
  );
};

export default Monday;

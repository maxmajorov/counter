import React, { useState } from "react";
import Increment from "./Buttons/Increment/Increment";
import Reset from "./Buttons/Reset/Reset";
import classes from "./Monday.module.css";

const Monday = () => {
  let [count, setCount] = useState<number>(0);

  const setCountCallback = () => {
    setCount(++count);
  };

  const reset = () => {
    setCount(0);
  };

  let disabled = false;
  let finalSpanStyle = "";

  if (count >= 5) {
    finalSpanStyle = `${classes.redSpan}`;
    disabled = true;
  }

  return (
    <div className={classes.wrapper}>
      <div className={classes.countBox}>
        <span className={finalSpanStyle}>{count}</span>
      </div>
      <div className={classes.buttons}>
        <Increment setCount={setCountCallback} disabled={disabled}>
          INC
        </Increment>
        <Reset reset={reset} count={count}>
          RESET
        </Reset>
      </div>
    </div>
  );
};

export default Monday;

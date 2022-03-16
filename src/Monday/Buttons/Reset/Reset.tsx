import React, { ButtonHTMLAttributes, DetailedHTMLProps } from "react";
import classes from "./Reset.module.css";

// тип пропсов обычной кнопки, children в котором храниться название кнопки там уже описан
type DefaultButtonPropsType = DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;

type ResetPropsType = DefaultButtonPropsType & {
  reset: () => void;
  disabled?: boolean;
  count: number;
};

const Reset: React.FC<ResetPropsType> = ({
  disabled,
  count,
  reset,
  className,
  ...restProps // все остальные пропсы попадут в объект restProps, там же будет children
}) => {
  const finalClassName = `${
    !(count > 0) ? classes.disabled : classes.default
  } ${classes.button}`;

  return (
    <button
      onClick={reset}
      className={finalClassName}
      {...restProps} // отдаём кнопке остальные пропсы если они есть (children там внутри)
    />
  );
};

export default Reset;

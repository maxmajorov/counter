import React, { ButtonHTMLAttributes, DetailedHTMLProps } from "react";
import classes from "../../components/Buttons/ButtonCounter.module.css";

// тип пропсов обычной кнопки, children в котором храниться название кнопки там уже описан
type DefaultButtonPropsType = DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;

type ButtonCounterPropsType = DefaultButtonPropsType & {
  toogle?: () => void;
  setCount: () => void;
  disabled?: boolean;
};

const ButtonCounter: React.FC<ButtonCounterPropsType> = ({
  disabled,
  toogle,
  setCount,
  className,
  ...restProps // все остальные пропсы попадут в объект restProps, там же будет children
}) => {
  const finalClassName = `${disabled ? classes.disabled : classes.default} ${
    classes.button
  }`;

  return (
    <button
      disabled={disabled}
      onClick={() => setCount()}
      className={finalClassName}
      {...restProps} // отдаём кнопке остальные пропсы если они есть (children там внутри)
    />
  );
};

export default ButtonCounter;

import React from "react";
import classNames from "classnames";

type Props = {
  className?: string;
  children: string;
  onClick?: () => void;
  isFull?: boolean;
};

function Button({
  className = "",
  onClick = () => {},
  isFull = false,
  children,
}: Props) {
  const buttonClasses = classNames(className, "gc-btn", {
    "gc-btn--full": isFull,
  });

  return (
    <button onClick={onClick} className={buttonClasses} type="button">
      {children}
    </button>
  );
}

export default Button;

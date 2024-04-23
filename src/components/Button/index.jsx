// @flow
import React from "react";
import classNames from "classnames";

type Props = {
  className?: string,
  children: string,
  onClick?: () => void,
};

function Button(props: Props) {
  const { onClick, children, className } = props;

  const buttonClasses = classNames(className, "gc-btn");

  return (
    <button onClick={onClick} className={buttonClasses}>
      {children}
    </button>
  );
}

export default Button;

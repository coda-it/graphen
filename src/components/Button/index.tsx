import React from "react";
import classNames from "classnames";

type Props = {
  className?: string;
  children: string;
  onClick?: () => void;
  isFull?: boolean;
};

function Button(props: Props) {
  const { onClick, children, className, isFull } = props;

  const buttonClasses = classNames(className, "gc-btn", {
    "gc-btn--full": isFull,
  });

  return (
    <button onClick={onClick} className={buttonClasses} type='button'>
      {children}
    </button>
  );
}

Button.defaultProps = {
  className: '',
  onClick: () => {},
  isFull: false,
};

export default Button;

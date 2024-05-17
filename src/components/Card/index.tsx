import React from "react";
import classNames from "classnames";

type Props = {
  className?: string;
  children?: React.ReactNode;
  skin?: string;
  isGradient?: boolean;
};

function Card(props: Props) {
  const { children, className, skin, isGradient } = props;
  const dialogClasses = classNames(className, "gc-card", {
    'gc-card--default': skin === 'default',
    'gc-card--gradient': isGradient,
  });

  return <div className={dialogClasses}>{children}</div>;
}

// @ts-ignore
Card.defaultProps = {
  className: '',
  children: null,
  skin: "default",
  isGradient: false,
};

export default Card;

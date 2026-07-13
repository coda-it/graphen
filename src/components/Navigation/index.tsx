import React from "react";
import classNames from "classnames";

type Props = {
  className?: string;
  children?: React.ReactNode;
};

function Navigation({ className = "", children = null }: Props) {
  const navigationClasses = classNames(
    className,
    "gc-navigation",
    "gc-navigation--default"
  );

  return <ul className={navigationClasses}>{children}</ul>;
}

export default Navigation;

import React from "react";
import classNames from "classnames";

type Props = {
  className?: string;
  children?: React.ReactNode;
  isGrow?: boolean;
  isShrink?: boolean;
};

function FlexItem({
  className = "",
  children = null,
  isGrow = false,
  isShrink = false,
}: Props) {
  const dialogClasses = classNames(className, "gc-flex__item", {
    "gc-flex__item--grow": isGrow,
    "gc-flex__item--shrink": isShrink,
  });

  return <div className={dialogClasses}>{children}</div>;
}

export default FlexItem;

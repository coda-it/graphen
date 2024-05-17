import React from "react";
import classNames from "classnames";

type Props = {
  className?: string,
  children?: React.ReactNode,
  isGrow?: boolean;
  isShrink?: boolean;
};

function FlexItem(props: Props) {
  const { children, className, isGrow, isShrink } = props;
  const dialogClasses = classNames(className, "gc-flex__item", {
    'gc-flex__item--grow': isGrow,
    'gc-flex__item--shrink': isShrink,
  });

  return <div className={dialogClasses}>{children}</div>;
}

// @ts-ignore
FlexItem.defaultProps = {
  className: '',
  children: null,
  isGrow: false,
  isShrink: false,
};

export default FlexItem;

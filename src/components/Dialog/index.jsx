// @flow
import React from "react";
import classNames from "classnames";

type Props = {
  className?: string,
  children?: React$Element<any>,
};

function Dialog(props: Props) {
  const { children, className } = props;
  const dialogClasses = classNames(className, "gc-dialog");

  return <div className={dialogClasses}>{children}</div>;
}

export default Dialog;

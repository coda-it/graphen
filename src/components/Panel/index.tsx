import React from "react";
import classNames from "classnames";

type Props = {
  className?: string;
  children?: React.ReactNode;
  isSeparator?: boolean;
  isBordered?: boolean;
};

function Panel(props: Props) {
  const { children, className, isSeparator, isBordered } = props;
  const dialogClasses = classNames(className, "gc-panel", {
    'gc-panel--separator': isSeparator,
    'gc-panel--bordered': isBordered,
  });

  return <div className={dialogClasses}>{children}</div>;
}

// @ts-ignore
Panel.defaultProps = {
  className: '',
  children: null,
  isSeparator: false,
  isBordered: false,
};

export default Panel;

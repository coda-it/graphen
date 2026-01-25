import React from "react";
import classNames from "classnames";

type Props = {
  className: string;
  children: React.ReactNode;
  isSeparator: boolean;
  isBordered: boolean;
};

function Panel({
  children = null,
  className = "",
  isSeparator = false,
  isBordered = false,
}: Props) {
  const dialogClasses = classNames(className, "gc-panel", {
    "gc-panel--separator": isSeparator,
    "gc-panel--bordered": isBordered,
  });

  return <div className={dialogClasses}>{children}</div>;
}

export default Panel;

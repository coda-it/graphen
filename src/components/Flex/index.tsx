import React from "react";
import classNames from "classnames";

type Props = {
  className?: string;
  children?: React.ReactNode;
  isVertical?: boolean;
  alignItems?: string;
  alignContent?: string;
  wrap?: string;
};

function Flex({
  className = "",
  children = null,
  isVertical = false,
  alignItems = undefined,
  alignContent = undefined,
  wrap = undefined,
}: Props) {
  const dialogClasses = classNames(className, "gc-flex", {
    "gc-flex--vertical": isVertical,
    "gc-flex--align-items-center": alignItems === "center",
    "gc-flex--align-content-center": alignContent === "center",
    "gc-flex--wrap": wrap === "wrap",
  });

  return <div className={dialogClasses}>{children}</div>;
}

export default Flex;

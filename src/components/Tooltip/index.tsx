import React from "react";
import classNames from "classnames";

type Props = {
  className: string;
  children: string;
  type: string;
};

function Tooltip({ className = "", children = null, type = "success" }: Props) {
  const validationClasses = classNames(className, "gc-tooltip", {
    "gc-tooltip--success": type === "success",
    "gc-tooltip--danger": type === "danger",
  });

  return <div className={validationClasses}>{children}</div>;
}

export default Tooltip;

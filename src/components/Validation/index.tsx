import React from "react";
import classNames from "classnames";
import Tooltip from "../Tooltip";

type Props = {
  className?: string;
  children?: React.ReactNode;
  type?: string;
  message?: string | null;
};

function Validation({
  className = "",
  children = null,
  type = "success",
  message = null,
}: Props) {
  const validationClasses = classNames(className, "gc-validation");

  const tooltip = message ? (
    <Tooltip className="gc-validation__message" type={type}>
      {message}
    </Tooltip>
  ) : null;

  return (
    <div className={validationClasses}>
      {children}
      {tooltip}
    </div>
  );
}

export default Validation;

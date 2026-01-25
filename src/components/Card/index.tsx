import React from "react";
import classNames from "classnames";

type Props = {
  className: string;
  children: React.ReactNode;
  skin: string;
  isGradient: boolean;
};

function Card({
  className = "",
  children = null,
  skin = "default",
  isGradient = false,
}: Props) {
  const dialogClasses = classNames(className, "gc-card", {
    "gc-card--default": skin === "default",
    "gc-card--gradient": isGradient,
  });

  return <div className={dialogClasses}>{children}</div>;
}

export default Card;

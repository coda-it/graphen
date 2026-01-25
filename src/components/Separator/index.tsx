import React from "react";
import classNames from "classnames";

type Props = {
  className?: string;
};

function Separator({ className = "" }: Props) {
  const dialogClasses = classNames(className, "gc-separator");

  return <div className={dialogClasses} />;
}

export default Separator;

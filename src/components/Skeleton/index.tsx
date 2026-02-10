import React from "react";
import classNames from "classnames";

function Skeleton({ className }: { className?: string }) {
  const classes = classNames(className, "gc-skeleton");

  return <div className={classes} />;
}

export default Skeleton;

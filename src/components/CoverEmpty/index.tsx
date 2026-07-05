import React from "react";
import classNames from "classnames";
import { IconImg } from "../Icons";

type Props = {
  className?: string;
};

function CoverEmpty({ className = "" }: Props) {
  const classes = classNames("gc-cover-empty", className);

  return (
    <span className={classes}>
      <IconImg className="gc-cover-empty__icon" />
    </span>
  );
}

export default CoverEmpty;

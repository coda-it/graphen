import React from "react";
import classNames from "classnames";

type Props = {
  className?: string;
  type?: "default" | "info" | "success" | "danger";
  children?: React.ReactNode;
  showPulse?: boolean;
};

function Badge({
  className = "",
  type = "default",
  children = null,
  showPulse = false,
}: Props) {
  const classes = classNames("gc-badge", className, {
    [`gc-badge--${type}`]: type !== "default",
  });

  return (
    <span className={classes}>
      {showPulse && <span className="gc-badge__pulse" aria-hidden="true" />}
      {children}
    </span>
  );
}

export default Badge;

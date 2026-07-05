import React from "react";
import classNames from "classnames";

export type StatModifier = "gray" | "blue" | "green" | "amber" | "red";

type Props = {
  modifier?: StatModifier;
  label: React.ReactNode;
  value: React.ReactNode;
  className?: string;
};

function Stat({ modifier = "gray", label, value, className = "" }: Props) {
  return (
    <div className={classNames("gc-stat", `gc-stat--${modifier}`, className)}>
      <div className="gc-stat__key">
        <span className="gc-stat__dot" />
        {label}
      </div>
      <div className="gc-stat__value">{value}</div>
    </div>
  );
}

export default Stat;

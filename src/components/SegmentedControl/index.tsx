import React from "react";
import classNames from "classnames";

export type SegmentedControlOption<TValue extends string = string> = {
  value: TValue;
  label: React.ReactNode;
};

type Props<TValue extends string = string> = {
  options: ReadonlyArray<SegmentedControlOption<TValue>>;
  value: TValue;
  onChange: (value: TValue) => void;
  className?: string;
};

function SegmentedControl<TValue extends string = string>({
  options,
  value,
  onChange,
  className = "",
}: Props<TValue>) {
  return (
    <div
      className={classNames("gc-segmented-control", className)}
      role="tablist"
    >
      {options.map((option) => (
        <button
          key={option.value}
          type="button"
          role="tab"
          aria-selected={value === option.value}
          className={classNames("gc-segmented-control__option", {
            "gc-segmented-control__option--on": value === option.value,
          })}
          onClick={() => onChange(option.value)}
        >
          {option.label}
        </button>
      ))}
    </div>
  );
}

export default SegmentedControl;

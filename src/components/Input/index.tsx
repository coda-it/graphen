import React from "react";
import classNames from "classnames";

type Props = {
  className?: string;
  type?: string;
  label: string;
  validation?: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  value?: string;
};

function Input({
  className = "",
  type = "",
  label,
  validation = undefined,
  onChange = () => {},
  value,
}: Props) {
  const inputClasses = classNames(className, "gc-input");
  const fieldClasses = classNames("gc-input__field", {
    "gc-input__field--success": validation === "success",
    "gc-input__field--danger": validation === "danger",
  });
  const id = `input-${label}`;

  const props = {
    className: fieldClasses,
    type,
    label,
    validation,
    onChange,
    value,
  };

  return (
    <div className={inputClasses}>
      <label htmlFor={id} className="gc-input__label">
        {label}
      </label>
      {/* eslint-disable-next-line react/jsx-props-no-spreading */}
      <input {...props} />
    </div>
  );
}

export default Input;

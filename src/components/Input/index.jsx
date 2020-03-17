// @flow
import React from "react";
import classNames from "classnames";

type Props = {
  className?: string,
  children?: React$Element<any>,
  type?: string,
  label: string,
  validation?: string,
  onChange?: Event => void
};

function Input(props: Props) {
  const { type, label, className, validation, onChange } = props;
  const inputClasses = classNames(className, "gc-input");
  const fieldClasses = classNames("gc-input__field", {
    "gc-input__field--success": validation === "success",
    "gc-input__field--danger": validation === "danger"
  });

  return (
    <div className={inputClasses}>
      <label className="gc-input__label">{label}</label>
      <input type={type} className={fieldClasses} onChange={onChange} />
    </div>
  );
}

export default Input;

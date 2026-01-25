import React from "react";
import classNames from "classnames";

type Props = {
  className: string;
  type: string;
  label: string;
  validation: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
};

function Input({
  className = "",
  type = "",
  label,
  validation = undefined,
  onChange = () => {},
}: Props) {
  const inputClasses = classNames(className, "gc-input");
  const fieldClasses = classNames("gc-input__field", {
    "gc-input__field--success": validation === "success",
    "gc-input__field--danger": validation === "danger",
  });
  const id = `input-${label}`;

  return (
    <div className={inputClasses}>
      <label htmlFor={id} className="gc-input__label">
        {label}
      </label>
      <input id={id} type={type} className={fieldClasses} onChange={onChange} />
    </div>
  );
}

export default Input;

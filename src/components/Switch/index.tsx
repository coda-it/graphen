import React, { useState, useEffect } from "react";
import classNames from "classnames";

type Props = {
  isSwitched?: boolean;
  type?: "success" | "info" | "danger";
  onChange?: (arg0: boolean) => void;
};

function Switch(props: Props) {
  const { onChange, type, isSwitched } = props;
  const [isChecked, setIsChecked] = useState(isSwitched);

  useEffect(() => {
    setIsChecked(isSwitched);
  }, [isSwitched]);

  const switchClasses = classNames("gc-switch", {
    'gc-switch--success': type === "success",
    'gc-switch--info': type === "info",
    'gc-switch--danger': type === "danger",
  });

  return (
    // eslint-disable-next-line jsx-a11y/label-has-associated-control
    <label className={switchClasses}>
      <input
        className="gc-switch__input"
        type="checkbox"
        onChange={(event) => {
          const { checked } = event.target;
          setIsChecked(checked);
          onChange(checked);
        }}
        checked={isChecked}
      />
      <span className="gc-switch__slider" />
    </label>
  );
}

// @ts-ignore
Switch.defaultProps = {
  isSwitched: false,
  type: undefined,
  onChange: () => {},
};

export default Switch;

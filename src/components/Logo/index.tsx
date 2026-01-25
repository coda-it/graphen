import React from "react";
import classNames from "classnames";

type Props = {
  className: string;
  onClick: () => void;
};

function Logo({ className = "", onClick = () => {} }: Props) {
  const logoClasses = classNames(className, "gc-logo");

  /* eslint-disable jsx-a11y/no-static-element-interactions */
  return (
    <span onClick={onClick} className={logoClasses}>
      CODA_
    </span>
  );
  /* eslint-enable jsx-a11y/no-static-element-interactions */
}

export default Logo;

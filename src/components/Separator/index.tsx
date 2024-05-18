import React from "react";
import classNames from "classnames";

type Props = {
  className?: string,
};

function Separator(props: Props) {
  const { className} = props;
  const dialogClasses = classNames(className, "gc-separator");

  return <div className={dialogClasses} />;
}

// @ts-ignore
Separator.defaultProps = {
  className: '',
};

export default Separator;

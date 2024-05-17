import React from "react";
import classNames from "classnames";

type Props = {
  className?: string;
  children?: React.ReactNode;
};

function PanelFooter(props: Props) {
  const { children, className} = props;
  const dialogClasses = classNames(className, "gc-panel__footer");

  return <div className={dialogClasses}>{children}</div>;
}

// @ts-ignore
PanelFooter.defaultProps = {
  className: '',
  children: null,
};

export default PanelFooter;

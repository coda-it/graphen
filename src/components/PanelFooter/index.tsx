import React from "react";
import classNames from "classnames";

type Props = {
  className: string;
  children: React.ReactNode;
};

function PanelFooter({ className = "", children = null }: Props) {
  const dialogClasses = classNames(className, "gc-panel__footer");

  return <div className={dialogClasses}>{children}</div>;
}

export default PanelFooter;

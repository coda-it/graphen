import React from "react";
import classNames from "classnames";

type Props = {
  className: string;
  children: React.ReactNode;
};

function PanelTitle({ className = "", children = null }: Props) {
  const dialogClasses = classNames(className, "gc-panel__title");

  return <header className={dialogClasses}>{children}</header>;
}

export default PanelTitle;

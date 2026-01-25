import React from "react";
import classNames from "classnames";

type Props = {
  className: string;
  children: React.ReactNode;
};

function PanelContent({ className = "", children = null }: Props) {
  const dialogClasses = classNames(className, "gc-panel__content");

  return <article className={dialogClasses}>{children}</article>;
}

export default PanelContent;

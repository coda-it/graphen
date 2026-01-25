import React from "react";
import classNames from "classnames";

type Props = {
  className: string;
  children: React.ReactNode;
  isOverlay: boolean;
};

function Dialog({ className = "", children = null, isOverlay = false }: Props) {
  const dialogClasses = classNames(className, "gc-dialog");

  return (
    <>
      <div className={dialogClasses}>{children}</div>
      {isOverlay && <div className="gc-dialog__overlay" />}
    </>
  );
}

export default Dialog;

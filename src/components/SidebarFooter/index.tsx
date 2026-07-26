import React from "react";
import classNames from "classnames";

type Props = {
  className?: string;
  children?: React.ReactNode;
};

function SidebarFooter({ className = "", children = null }: Props) {
  const footerClasses = classNames(className, "gc-sidebar__footer");

  return <div className={footerClasses}>{children}</div>;
}

export default SidebarFooter;

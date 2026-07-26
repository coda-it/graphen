import React from "react";
import classNames from "classnames";

type Props = {
  className?: string;
  label?: React.ReactNode;
  children?: React.ReactNode;
};

function SidebarGroup({
  className = "",
  label = null,
  children = null,
}: Props) {
  const groupClasses = classNames(className, "gc-sidebar__group");

  return (
    <div className={groupClasses}>
      {label && <div className="gc-sidebar__group-label">{label}</div>}
      {children}
    </div>
  );
}

export default SidebarGroup;

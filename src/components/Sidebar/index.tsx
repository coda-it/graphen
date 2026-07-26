import React from "react";
import classNames from "classnames";

type Props = {
  className?: string;
  ariaLabel?: string;
  isCollapsed?: boolean;
  children?: React.ReactNode;
};

function Sidebar({
  className = "",
  ariaLabel = "Sidebar",
  isCollapsed = false,
  children = null,
}: Props) {
  const sidebarClasses = classNames(className, "gc-sidebar", {
    "gc-sidebar--collapsed": isCollapsed,
  });

  return (
    <nav className={sidebarClasses} aria-label={ariaLabel}>
      {children}
    </nav>
  );
}

export default Sidebar;

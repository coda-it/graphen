import React from "react";
import classNames from "classnames";
import SidebarOption from "src/components/SidebarOption";

type Props = {
  className?: string;
  label: React.ReactNode;
  icon?: React.ReactNode;
  badge?: React.ReactNode;
  isActive?: boolean;
  hasActiveChild?: boolean;
  isExpanded?: boolean;
  onToggle?: () => void;
  children?: React.ReactNode;
};

function SidebarSubmenu({
  className = "",
  label,
  icon = null,
  badge = null,
  isActive = false,
  hasActiveChild = false,
  isExpanded = false,
  onToggle = undefined,
  children = null,
}: Props) {
  const blockClasses = classNames(className, "gc-sidebar__block");

  const optionClasses = classNames({
    "gc-sidebar__option--branch": hasActiveChild,
  });

  const subnavClasses = classNames("gc-sidebar__subnav", {
    "gc-sidebar__subnav--open": isExpanded,
  });

  return (
    <div className={blockClasses}>
      <SidebarOption
        className={optionClasses}
        label={label}
        icon={icon}
        badge={badge}
        isActive={isActive}
        isExpandable
        isExpanded={isExpanded}
        onClick={onToggle}
      />
      <div className={subnavClasses}>
        <div className="gc-sidebar__subnav-inner" role="group">
          {children}
        </div>
      </div>
    </div>
  );
}

export default SidebarSubmenu;

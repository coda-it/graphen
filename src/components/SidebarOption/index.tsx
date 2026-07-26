import React from "react";
import classNames from "classnames";

type Props = {
  className?: string;
  label: React.ReactNode;
  href?: string;
  icon?: React.ReactNode;
  isActive?: boolean;
  count?: React.ReactNode;
  badge?: React.ReactNode;
  onClick?: () => void;
};

function SidebarOption({
  className = "",
  label,
  href = undefined,
  icon = null,
  isActive = false,
  count = undefined,
  badge = null,
  onClick = undefined,
}: Props) {
  const optionClasses = classNames(className, "gc-sidebar__option", {
    "gc-sidebar__option--active": isActive,
  });

  const content = (
    <>
      {icon && (
        <span className="gc-sidebar__option-icon" aria-hidden="true">
          {icon}
        </span>
      )}
      <span className="gc-sidebar__option-label">{label}</span>
      {badge && <span className="gc-sidebar__option-badge">{badge}</span>}
      {count != null && (
        <span className="gc-sidebar__option-count">{count}</span>
      )}
      <span className="gc-sidebar__option-tip">{label}</span>
    </>
  );

  if (href) {
    return (
      <a
        className={optionClasses}
        href={href}
        onClick={onClick}
        aria-current={isActive ? "page" : undefined}
      >
        {content}
      </a>
    );
  }

  return (
    <button
      type="button"
      className={optionClasses}
      onClick={onClick}
      aria-current={isActive ? "page" : undefined}
    >
      {content}
    </button>
  );
}

export default SidebarOption;

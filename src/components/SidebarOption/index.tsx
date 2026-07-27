import React from "react";
import classNames from "classnames";

type Props = {
  className?: string;
  label: React.ReactNode;
  href?: string;
  icon?: React.ReactNode;
  isActive?: boolean;
  isExpandable?: boolean;
  isExpanded?: boolean;
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
  isExpandable = false,
  isExpanded = false,
  count = undefined,
  badge = null,
  onClick = undefined,
}: Props) {
  const optionClasses = classNames(className, "gc-sidebar__option", {
    "gc-sidebar__option--active": isActive,
  });

  const caretClasses = classNames("gc-sidebar__option-caret", {
    "gc-sidebar__option-caret--expanded": isExpanded,
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
      {count != null && !isExpandable && (
        <span className="gc-sidebar__option-count">{count}</span>
      )}
      {isExpandable && (
        <span className={caretClasses} aria-hidden="true">
          <svg viewBox="0 0 24 24">
            <path d="M9 6l6 6-6 6" />
          </svg>
        </span>
      )}
      <span className="gc-sidebar__option-tip" aria-hidden="true">
        {label}
      </span>
    </>
  );

  // An expandable option toggles its own submenu, so it always renders as a
  // button even when an href would otherwise make it a link.
  if (href && !isExpandable) {
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
      aria-expanded={isExpandable ? isExpanded : undefined}
    >
      {content}
    </button>
  );
}

export default SidebarOption;

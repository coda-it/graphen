import React from "react";
import classNames from "classnames";

type Props = {
  className?: string;
  label: React.ReactNode;
  href?: string;
  isActive?: boolean;
  count?: React.ReactNode;
  onClick?: () => void;
};

function SidebarSubOption({
  className = "",
  label,
  href = undefined,
  isActive = false,
  count = undefined,
  onClick = undefined,
}: Props) {
  const subOptionClasses = classNames(className, "gc-sidebar__suboption", {
    "gc-sidebar__suboption--active": isActive,
  });

  const content = (
    <>
      <span className="gc-sidebar__suboption-label">{label}</span>
      {count != null && (
        <span className="gc-sidebar__suboption-count">{count}</span>
      )}
    </>
  );

  if (href) {
    return (
      <a
        className={subOptionClasses}
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
      className={subOptionClasses}
      onClick={onClick}
      aria-current={isActive ? "page" : undefined}
    >
      {content}
    </button>
  );
}

export default SidebarSubOption;

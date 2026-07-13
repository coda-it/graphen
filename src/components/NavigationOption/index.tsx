import React, { useCallback, useState } from "react";
import classNames from "classnames";

type Props = {
  className?: string;
  label: React.ReactNode;
  href?: string;
  isActive?: boolean;
  children?: React.ReactNode;
};

function NavigationOption({
  className = "",
  label,
  href = undefined,
  isActive = false,
  children = null,
}: Props) {
  const [isOpened, setIsOpened] = useState(false);

  const toggleSubmenu = useCallback(() => {
    setIsOpened((previousIsOpened) => !previousIsOpened);
  }, [setIsOpened]);

  const closeSubmenuOnBlur = useCallback(
    (event: React.FocusEvent<HTMLLIElement>) => {
      if (!event.currentTarget.contains(event.relatedTarget as Node | null)) {
        setIsOpened(false);
      }
    },
    [setIsOpened]
  );

  const closeSubmenuOnEscape = useCallback(
    (event: React.KeyboardEvent<HTMLLIElement>) => {
      if (event.key === "Escape") {
        setIsOpened(false);
      }
    },
    [setIsOpened]
  );

  const optionClasses = classNames(className, "gc-navigation__option", {
    "gc-navigation__option--active": isActive,
  });

  if (!children) {
    return (
      <li className={optionClasses}>
        <a className="gc-navigation__link" href={href}>
          {label}
        </a>
      </li>
    );
  }

  const submenuClasses = classNames("gc-submenu", {
    "gc-submenu--opened": isOpened,
  });

  return (
    <li
      className={optionClasses}
      onBlur={closeSubmenuOnBlur}
      onKeyDown={closeSubmenuOnEscape}
    >
      <button
        type="button"
        className="gc-navigation__link"
        aria-haspopup="true"
        aria-expanded={isOpened}
        onClick={toggleSubmenu}
      >
        {label}
      </button>
      <div className={submenuClasses}>
        <div className="gc-submenu__content">{children}</div>
      </div>
    </li>
  );
}

export default NavigationOption;

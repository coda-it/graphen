import React, { useCallback, useLayoutEffect, useRef, useState } from "react";
import classNames from "classnames";

const SUBMENU_VIEWPORT_MARGIN = 10;

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
  const [submenuPosition, setSubmenuPosition] = useState({ top: 0, left: 0 });
  const triggerReference = useRef<HTMLButtonElement>(null);
  const submenuReference = useRef<HTMLDivElement>(null);

  const toggleSubmenu = useCallback(() => {
    setIsOpened((previousIsOpened) => !previousIsOpened);
  }, [setIsOpened]);

  const updateSubmenuPosition = useCallback(() => {
    const trigger = triggerReference.current;
    const submenu = submenuReference.current;

    if (!trigger || !submenu) {
      return;
    }

    const triggerRect = trigger.getBoundingClientRect();
    const maximumLeft =
      window.innerWidth - submenu.offsetWidth - SUBMENU_VIEWPORT_MARGIN;

    setSubmenuPosition({
      top: triggerRect.bottom,
      left: Math.max(
        SUBMENU_VIEWPORT_MARGIN,
        Math.min(triggerRect.left, maximumLeft)
      ),
    });
  }, [setSubmenuPosition]);

  useLayoutEffect(() => {
    if (!isOpened) {
      return undefined;
    }

    updateSubmenuPosition();

    // capture phase catches scrolling inside consumer overflow containers
    window.addEventListener("scroll", updateSubmenuPosition, true);
    window.addEventListener("resize", updateSubmenuPosition);

    return () => {
      window.removeEventListener("scroll", updateSubmenuPosition, true);
      window.removeEventListener("resize", updateSubmenuPosition);
    };
  }, [isOpened, updateSubmenuPosition]);

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
        ref={triggerReference}
        type="button"
        className="gc-navigation__link"
        aria-haspopup="true"
        aria-expanded={isOpened}
        onClick={toggleSubmenu}
      >
        {label}
      </button>
      <div
        ref={submenuReference}
        className={submenuClasses}
        style={{ top: submenuPosition.top, left: submenuPosition.left }}
      >
        <div className="gc-submenu__content">{children}</div>
      </div>
    </li>
  );
}

export default NavigationOption;

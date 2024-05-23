import React, { useState, useCallback, useEffect } from "react";
import classNames from "classnames";

type Props = {
  initValue: Readonly<{ value: string, label: string }>,
  label?: string,
  items: ReadonlyArray<{ value: string, label: string }>,
  onChange: (arg0: string) => void,
};

function Dropdown(props: Props) {
  const { initValue, label, items, onChange } = props;

  const [isExpanded, setIsExpanded] = useState(false);
  const [selectedItem, setSelectedItem] = useState(initValue);

  useEffect(() => {
    setSelectedItem(initValue);
  }, [initValue, setSelectedItem]);

  const expandMenu = useCallback(() => {
    setIsExpanded((isShown) => !isShown);
  }, [setIsExpanded]);

  const selectItem = useCallback(
    (item) => {
      onChange(item.value);
      setIsExpanded(false);
      setSelectedItem(items.find((i) => i.value === item.value));
    },
    [setIsExpanded, setSelectedItem, items]
  );

  const buttonClasses = classNames('gc-dropdown__btn', {
    'gc-dropdown__btn--with-label': label,
  });

  return (
    <div className="gc-dropdown">
      {label && (<label className="gc-dropdown__label" htmlFor="gc-dropdown__label">
        {label}
      </label>)}
      <div className="gc-dropdown__menu">
        <button
          type="button"
          className={buttonClasses}
          data-cy="dropdown-button"
          onClick={expandMenu}
        >
          {selectedItem.label}
        </button>
        {isExpanded && (
          <div className="gc-dropdown__content">
            <ul className="gc-dropdown__list">
              {/* eslint-disable jsx-a11y/no-static-element-interactions */}
              {items.map((item, index) => {
                const dropdownItemClasses = classNames("gc-dropdown__item", {
                  "gc-dropdown__item--first": index === 0,
                  "gc-dropdown__item--selected": item.value === selectedItem.value,
                });

                return (
                  /* eslint-disable react/button-has-type */
                  <li
                    data-cy="dropdown-item"
                    className={dropdownItemClasses}
                    key={`dropdown-${label}-${item.label}`}
                    onClick={() => selectItem(item)}
                  >
                    <a className="gc-dropdown__link">{item.label}</a>
                  </li>
                  /* eslint-enable react/button-has-type */
                );
              })}
              {/* eslint-enable jsx-a11y/no-static-element-interactions */}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

// @ts-ignore
Dropdown.defaultProps = {
  label: undefined,
};

export default Dropdown;

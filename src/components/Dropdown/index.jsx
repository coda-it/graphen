// @flow
import React, { useState, useCallback } from "react";
import * as _ from "lodash";
import classNames from "classnames";

type Props = {
  initValue: $ReadOnly<{ value: string, label: string }>,
  label: string,
  items: $ReadOnlyArray<{ value: string, label: string }>,
  onChange: (string) => void,
};

export default function Dropdown(props: Props) {
  const { initValue, label, items, onChange } = props;
  const [isExpanded, setIsExpanded] = useState(false);
  const [selectedItem, setSelectedItem] = useState(initValue);
  const expandMenu = useCallback(() => {
    setIsExpanded((isShown) => !isShown);
  }, [setIsExpanded]);
  const selectItem = useCallback(
    (item) => {
      onChange(item.value);
      setIsExpanded(false);
      setSelectedItem(_.find(items, (i) => i.value === item.value));
    },
    [setIsExpanded, setSelectedItem, items]
  );

  return (
    <div className="gc-dropdown">
      <label className="gc-dropdown__label" htmlFor="gc-dropdown__label">
        {label}
      </label>
      <div className="gc-dropdown__menu">
        <button
          className="gc-dropdown__btn"
          data-cy="dropdown-button"
          onClick={expandMenu}
        >
          {selectedItem.label}
        </button>
        {isExpanded && (
          <div className="gc-dropdown__content">
            <ul className="gc-dropdown__list">
              {/* eslint-disable jsx-a11y/no-static-element-interactions */}
              {_.map(items, (item) => {
                const dropdownItemClasses = classNames("gc-dropdown__item", {
                  "gc-dropdown__item--first": item === items[0],
                });
                return (
                  <li
                    data-cy="dropdown-item"
                    className={dropdownItemClasses}
                    key={`dropdown-${label}-${item.label}`}
                    onClick={() => selectItem(item)}
                  >
                    <a className="gc-dropdown__link">{item.label}</a>
                  </li>
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

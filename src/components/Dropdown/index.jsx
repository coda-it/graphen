// @flow
import React, { useState, useCallback } from "react";
const _ = require("lodash");
 type Props = {
  label: string,
  items: Array<string>
}

export default function Dropdown(props: Props) {
	const [isExpanded, setIsExpanded] = useState(false);
  const [selectedItem, setSelectedItem] = useState("-Select Value-");
  const {label, items} = props;
	const expandMenu = useCallback(() => {
    setIsExpanded(s => !s);
  }, [setIsExpanded]);
  const selectItem = useCallback((item) => {
    setIsExpanded(s => !s);
    setSelectedItem(item.value);
  }, [setIsExpanded, setSelectedItem]);
  return (
  	<div className="dropdown">
      <label>{label}</label><br />
  		<button className="dropdown__btn" onClick={ expandMenu }>
        {selectedItem}
  		</button>
      {isExpanded && (
        <div className="dropdown__content">
          <ul className="dropdown__list">
              {_.map(items, item =>
         <li className="dropdown__item" key="dropdown-${label}-${item.value}"><a className="dropdown__link" onClick={() => selectItem(item)}>{item.value}</a></li> 
        )}
           </ul>
        </div>
            )}
  		  </div>
  	);

}

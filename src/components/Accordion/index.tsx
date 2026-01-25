import React, { useState } from "react";
import classNames from "classnames";

type Props = {
  className: string;
  title: string;
  children: React.ReactNode;
  isCollapsed: boolean;
};

function Accordion({
  className = "",
  title,
  children = null,
  isCollapsed: isCollapsedProp = true,
}: Props) {
  const [isCollapsed, setIsCollapsed] = useState<boolean>(isCollapsedProp);

  const handleClick = () => {
    setIsCollapsed((prev) => !prev);
  };

  const accordionClasses = classNames(className, "gc-accordion");
  const contentClasses = classNames("gc-accordion__content", {
    "gc-accordion__content--collapsed": isCollapsed,
  });
  const indicator = isCollapsed ? (
    <i className="gc-icon gc-icon--circle-right gc-icon--medium" />
  ) : (
    <i className="gc-icon gc-icon--circle-down gc-icon--medium" />
  );

  return (
    <article className={accordionClasses}>
      {/* eslint-disable */}
      <header
        role="button"
        className="gc-accordion__title"
        onClick={handleClick}
      >
        {indicator} {title}
      </header>
      {/* eslint-enable */}
      <div className={contentClasses}>{children}</div>
    </article>
  );
}

export default Accordion;

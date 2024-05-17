import React from "react";
import classNames from "classnames";

type Props = {
  className?: string;
  children?: React.ReactNode;
};

function PanelTitle(props: Props) {
  const { children, className} = props;
  const dialogClasses = classNames(className, "gc-panel__title");

  return <header className={dialogClasses}>{children}</header>;
}

// @ts-ignore
PanelTitle.defaultProps = {
  className: '',
  children: null,
};

export default PanelTitle;

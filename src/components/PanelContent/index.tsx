import React from "react";
import classNames from "classnames";

type Props = {
  className?: string;
  children?: React.ReactNode;
};

function PanelContent(props: Props) {
  const { children, className} = props;
  const dialogClasses = classNames(className, "gc-panel__content");

  return <article className={dialogClasses}>{children}</article>;
}

// @ts-ignore
PanelContent.defaultProps = {
  className: '',
  children: null,
};

export default PanelContent;

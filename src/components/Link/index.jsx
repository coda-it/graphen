// @flow
import React from "react";
import classNames from "classnames";
import * as constants from "src/variables/constants";

type Props = {
  link: string,
  className?: string,
  children?: React.DOM,
  skin?: constants.Skin,
};

function Link({
  link,
  className,
  children,
  skin = constants.SKINS.primary,
}: Props) {
  const classes = classNames("gc-link", className, {
    "gc-link--primary": skin === constants.SKINS.primary,
    "gc-link--default": skin === constants.SKINS.default,
  });

  return (
    <a href={link} className={classes}>
      {children}
    </a>
  );
}

export default Link;

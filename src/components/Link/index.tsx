import React from "react";
import classNames from "classnames";
import * as constants from "src/variables/constants";

type Props = {
  link: string;
  className?: string;
  children?: React.ReactNode;
  skin?: constants.Skin;
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

// @ts-ignore
Link.defaultProps = {
  className: '',
  children: null,
  skin: undefined,
};

export default Link;

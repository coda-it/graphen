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
  className = "",
  children = null,
  skin = constants.SKIN_DEFAULT,
  link,
}: Props) {
  const classes = classNames("gc-link", className, {
    "gc-link--primary": skin === constants.SKIN_PRIMARY,
    "gc-link--default": skin === constants.SKIN_DEFAULT,
  });

  return (
    <a href={link} className={classes}>
      {children}
    </a>
  );
}

export default Link;

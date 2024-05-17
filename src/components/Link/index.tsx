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
  skin,
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

// @ts-ignore
Link.defaultProps = {
  className: '',
  children: null,
  skin: constants.SKIN_DEFAULT,
};

export default Link;

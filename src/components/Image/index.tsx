import React from "react";
import classNames from "classnames";

type Props = {
  src: string;
  className: string;
  height: number;
  width: number;
};

function Image({ className = "", height = 200, width = 200, src }: Props) {
  const classes = classNames("gc-image", className);

  return (
    <object
      className={classes}
      data={src}
      type="image/jpg"
      style={{ height, width }}
    >
      <div className="gc-image__fallback" />
    </object>
  );
}

export default Image;

import React from "react";
import classNames from "classnames";

type Props = {
  src: string,
  className?: string,
  height?: number,
  width?: number,
};

function Image(props: Props) {
  const { src, height, width, className } = props;
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

// @ts-ignore
Image.defaultProps = {
  className: '',
  height: 200,
  width: 200,
};


export default Image;

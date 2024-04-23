import React from "react";
import classNames from "classnames";

type Props = {
  className?: string,
  title: string,
  children?: React.DOM,
  isCollapsed?: boolean
};

type State = {
  isCollapsed: boolean
};

class Accordion extends React.PureComponent<Props, State> {
  constructor(props: Props) {
    super(props);

    const { isCollapsed } = props;
    this.state = {
      isCollapsed: isCollapsed || true
    };
  }

  handleClick() {
    this.setState(prevState => ({
      isCollapsed: !prevState.isCollapsed
    }));
  }

  render() {
    const { title, children, className } = this.props;
    const { isCollapsed } = this.state;

    const accordionClasses = classNames(className, "gc-accordion");
    const contentClasses = classNames("gc-accordion__content", {
      "gc-accordion__content--collapsed": isCollapsed
    });
    const indicator = isCollapsed ? (
      <i className="gc-icon gc-icon--circle-right gc-icon--medium" />
    ) : (
      <i className="gc-icon gc-icon--circle-down gc-icon--medium" />
    );

    return (
      <article className={accordionClasses}>
        {/* eslint-disable jsx-a11y/no-static-element-interactions */}
        <header
          role="button"
          tabIndex="0"
          className="gc-accordion__title"
          onClick={() => {
            this.handleClick();
          }}
        >
          {indicator} {title}
        </header>
        {/* eslint-enable jsx-a11y/no-static-element-interactions */}
        <div className={contentClasses}>{children}</div>
      </article>
    );
  }
}

export default Accordion;

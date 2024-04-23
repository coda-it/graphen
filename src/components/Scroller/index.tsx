import _ from "lodash";
import React from "react";
import ReactDOM from "react-dom";

const KNOB_SIZE = 12;
const BORDER_SIZE = 1;

type Props = {
  onScrollChange: (value: number) => void,
  min: number,
  max: number,
};

type State = {
  value: number,
};

class Scroller extends React.PureComponent<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      value: 0,
    };
  }

  onMove(event: React.DragEvent<HTMLDivElement>) {
    event.preventDefault();
    this.scroll(event);
    return false;
  }

  onDrop(event: React.DragEvent<HTMLDivElement>) {
    event.preventDefault();
    const { onScrollChange } = this.props;
    const { value } = this.state;

    onScrollChange(value);
    return false;
  }

  scroll(event: React.DragEvent<HTMLDivElement>) {
    const { clientX } = event;
    const { min, max } = this.props;

    /* eslint-disable react/no-find-dom-node */
    const node: null | Element | Text = ReactDOM.findDOMNode(this);
    /* eslint-enable react/no-find-dom-node */
    if (node === null || node instanceof Text) {
      return;
    }
    const rect: ClientRect = node.getBoundingClientRect();
    const mappedX = clientX - rect.left;
    const maxWidth = rect.width;
    const scaledX = (mappedX / maxWidth) * (max - min) + min;

    this.move(mappedX, scaledX, maxWidth);
  }

  move(x: number, vx: number, maxWidth: number) {
    const value = _.min([
      _.max([x, 0]),
      maxWidth - KNOB_SIZE - 2 * BORDER_SIZE,
    ]);

    this.setState({
      value,
    });
  }

  render() {
    const { value } = this.state;

    return (
      <div
        className="gc-scroller"
        onDragOver={(event: React.DragEvent<HTMLDivElement>) => {
          event.preventDefault();
          return false;
        }}
        onDrop={(event: React.DragEvent<HTMLDivElement>) => {
          this.onDrop(event);
        }}
      >
        <div
          className="gc-scroller__knob"
          style={{
            left: value,
          }}
        />
        <div
          className="gc-scroller__drag"
          draggable="true"
          onDrag={(event: React.DragEvent<HTMLDivElement>) => {
            this.onMove(event);
          }}
          style={{
            left: value,
          }}
        />
      </div>
    );
  }
}

export default Scroller;

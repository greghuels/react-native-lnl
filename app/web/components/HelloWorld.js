import React, { Component, PropTypes } from 'react';

export default class HelloWorld extends Component {
  render() {
    const { onClick, color } = this.props;
    return (
      <span
        className="hello-world"
        onClick={onClick}
        onKeyDown={onClick}
        style={{ color }}
        role="button"
        tabIndex="0"
      >
        Hello World
      </span>
    );
  }
}

HelloWorld.propTypes = {
  onClick: PropTypes.func.isRequired,
  color: PropTypes.string.isRequired,
};

import { connect } from 'react-redux';
import React, { Component, PropTypes } from 'react';

import { getHelloWorldColor } from '../../common/redux/helloWorld/selectors';
import { toggleHelloWorldColor } from '../../common/redux/helloWorld/actions';

class HelloWorld extends Component {
  render() {
    const { color } = this.props;
    return (
      <span
        className="hello-world"
        onClick={this.props.toggleHelloWorldColor}
        onKeyDown={this.props.toggleHelloWorldColor}
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
  color: PropTypes.string.isRequired,
  toggleHelloWorldColor: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  color: getHelloWorldColor(state),
});

export default connect(mapStateToProps, { toggleHelloWorldColor })(HelloWorld);

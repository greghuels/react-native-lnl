import {
  View,
  Text,
  StyleSheet,
} from 'react-native';
import { connect } from 'react-redux';
import React, { Component, PropTypes } from 'react';

import { getHelloWorldColor } from '../../common/redux/helloWorld/selectors';
import { toggleHelloWorldColor } from '../../common/redux/helloWorld/actions';

const styles = StyleSheet.create({
  helloWorld: {
    textAlign: 'center',
  },
});

class HelloWorld extends Component {
  render() {
    return (
      <View>
        <Text
          onPress={this.props.toggleHelloWorldColor}
          style={[styles.helloWorld, { color: this.props.color }]}
        >
          Hello World
        </Text>
      </View>
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

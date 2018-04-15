import { connect } from 'react-redux';
import React, { Component } from 'react';

import { getHelloWorldColor } from '../../common/redux/helloWorld/selectors';
import Header from '../components/Header';
import HelloWorld from '../components/HelloWorld';

/** The app entry point */
class ReactNativeWebHelloWorld extends Component {
  render() {
    return (
      <div className="react-native-web">
        <Header />
        <HelloWorld />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  color: getHelloWorldColor(state),
});

export default connect(mapStateToProps)(ReactNativeWebHelloWorld);

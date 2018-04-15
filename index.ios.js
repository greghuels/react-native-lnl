import { AppRegistry } from 'react-native';
import React, { Component } from 'react';

import Root from './app/native/containers/Root';
import configureStore from './app/common/redux/configureStore';

const store = configureStore();

class ReactNativeHelloWorld extends Component {
  render() {
    return (
      <Root store={store} />
    );
  }
}

AppRegistry.registerComponent('ReactNativeWebHelloWorld', () => ReactNativeHelloWorld);

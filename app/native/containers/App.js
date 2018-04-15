import { View } from 'react-native';
import React, { Component } from 'react';

import { appStyle } from '../styles/styles';
import Header from '../components/Header';
import HelloWorld from '../components/HelloWorld';


export default class ReactNativeWebHelloWorld extends Component {
  render() {
    return (
      <View style={appStyle.reactNativeWeb}>
        <Header />
        <HelloWorld />
      </View>
    );
  }
}

import React, {Component} from 'react';
import {Text, View} from 'react-native';
import StyleSheet from './src/style_sheet/index';

export default class App extends Component {
  render() {
    return (
      <View>
        <Text> textInComponent </Text>
        <StyleSheet />
      </View>
    );
  }
}

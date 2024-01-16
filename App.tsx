/* eslint-disable react-native/no-inline-styles */
import {View, Text} from 'react-native';
import React from 'react';
// import StyleSheet from './src/style_sheet/index';
import FlexDirection from './src/FlexBox/FlexDirection';

export default function App() {
  return (
    <View>
      <Text style={{paddingTop: 100}}> textInCo1mponent </Text>
      <FlexDirection />
    </View>
  );
}

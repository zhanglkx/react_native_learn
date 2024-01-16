/* eslint-disable react-native/no-inline-styles */
import {View, Text} from 'react-native';
import React from 'react';

export default function index() {
  return (
    <View>
      {/* 对象形式的 style sheet */}
      <Text style={{fontSize: 20, color: 'red', padding: 100}}>index</Text>
      {/* 数组形式 */}
      <Text style={[{fontSize: 20, color: 'red', padding: 100}]}>index</Text>
    </View>
  );
}

/* eslint-disable react-native/no-inline-styles */
import {View, Text, StyleSheet} from 'react-native';
import React from 'react';

export default function index() {
  return (
    <View>
      {/* 对象形式的 style sheet */}
      <Text style={{fontSize: 20, color: 'red', padding: 100}}>index</Text>

      {/* 数组形式 当多个样式有属性重叠，后面的样式优先级高 */}
      <Text
        style={[{fontSize: 20, color: 'red', padding: 100}, {color: 'pink'}]}>
        index
      </Text>

      <Text
        style={[{fontSize: 20, color: 'red', padding: 100}, styles.highlight]}>
        index
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

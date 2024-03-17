import React from 'react';
import {SectionList, Text, View, StyleSheet} from 'react-native';

// 示例数据
const sections = [
  {
    title: 'A',
    data: ['Apple', 'Banana', 'Cherry'],
    key: 'A',
  },
  {
    title: 'B',
    data: ['Blueberry', 'Blackberry', 'Boysenberry'],
    key: 'B',
  },
  {
    title: 'C',
    data: ['Cherry', 'Cranberry', 'Cucumber'],
    key: 'C',
  },
];

const Item = ({item}) => (
  <View style={styles.item}>
    <Text style={styles.itemText}>{item}</Text>
  </View>
);

const SectionHeader = ({section: {title}}) => (
  <Text style={styles.sectionHeader}>{title}</Text>
);

const MySectionList = () => (
  <SectionList
    sections={sections}
    renderItem={Item}
    renderSectionHeader={SectionHeader}
    keyExtractor={(item, index) => item + index}
  />
);

const styles = StyleSheet.create({
  sectionHeader: {
    paddingVertical: 8,
    fontSize: 16,
    fontWeight: 'bold',
  },
  item: {
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
  itemText: {
    fontSize: 14,
  },
});

export default MySectionList;

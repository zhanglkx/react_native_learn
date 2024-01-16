import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const FlexDirection = () => {
  return (
    <View style={styles.height}>
      <Text style={[styles.sectionContainer, styles.container]}>
        FlexDirection
      </Text>
    </View>
  );
};

export default FlexDirection;

const styles = StyleSheet.create({
  sectionContainer: {
    fontSize: 40,
    backgroundColor: 'red',
  },
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  item: {
    width: 100,
    height: 100,
    backgroundColor: 'blue',
    margin: 10,
  },
  height: {
    backgroundColor: 'yellow',
    height: 1100,
  },
});

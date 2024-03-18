import {View, Text, ActivityIndicator, StyleSheet} from 'react-native';
import React from 'react';

const Loading = () => {
  return (
    <View style={[styles.container]}>
      <View style={[styles.loading]}>
        <ActivityIndicator color={'white'} />
        <Text style={[styles.loadingTitle]}>加载中...</Text>
      </View>
    </View>
  );
};

export default Loading;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loading: {
    backgroundColor: '#999',
    height: 100,
    width: 150,
    borderRadius: 20,
    padding: 20,
  },
  loadingTitle: {
    textAlign: 'center',
    color: 'white',
    marginTop: 20,
  },
});

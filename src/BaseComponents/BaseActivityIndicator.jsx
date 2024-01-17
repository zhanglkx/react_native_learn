import {View, Text, ActivityIndicator, Alert, Platform} from 'react-native';
import React from 'react';

const BaseActivityIndicator = () => {
  if (Platform.OS === 'android') {
    Alert.alert('android');
  } else {
    Alert.alert('ios');
  }
  return (
    <View>
      <Text>BaseActivityIndicator</Text>
      <ActivityIndicator color={'blue'} size={'large'} />
      <Text>ActivityIndicator</Text>
      {/* 数字指定大小尽在安卓有效 */}
      <ActivityIndicator color={'red'} size={70} />
      <ActivityIndicator color={'purple'} size={100} />
    </View>
  );
};

export default BaseActivityIndicator;

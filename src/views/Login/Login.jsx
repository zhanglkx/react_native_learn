import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import {Button} from 'react-native-paper';
import {useNavigation} from '@react-navigation/native';
import {Image} from 'react-native';
import {useHeaderHeight} from '@react-navigation/elements';

import styles from './style';

export default function Login() {
  const navigator = useNavigation();

  const headerHeigh = useHeaderHeight();

  const gotoHome = () => {
    navigator.navigate('Change');
    console.log(headerHeigh);
  };

  return (
    <View style={styles.container}>
      <Image style={styles.icon} source={require('./Image/icon.png')} />

      <Text style={styles.textStyle}>Login</Text>

      <Button
        mode="text"
        labelStyle={styles.buttonStyle}
        buttonStyle={styles.buttonStyle}
        buttonColor="#f194ff"
        onPress={gotoHome}>
        Button111
      </Button>
    </View>
  );
}

import {View, Text, StyleSheet, SafeAreaView} from 'react-native';
import React from 'react';
import {Button} from 'react-native-paper';
import {useNavigation} from '@react-navigation/native';
import {Image} from 'react-native';
import {useHeaderHeight} from '@react-navigation/elements';

import {Dimensions, StatusBar} from 'react-native';

import {getNavHeight} from '../../utils/deviceInfo';

import styles from './style/style';

export default function Login() {
  const navigator = useNavigation();

  const headerHeigh = getNavHeight();

  const gotoHome = () => {
    navigator.navigate('Change');
    console.log(headerHeigh);
  };

  return (
    <View style={styles.container}>
      <SafeAreaView>
        <Image style={styles.icon} source={require('./Image/icon.png')} />

        <Button
          mode="text"
          labelStyle={styles.buttonStyle}
          buttonStyle={styles.buttonStyle}
          buttonColor="#f194ff"
          onPress={gotoHome}>
          Button111
        </Button>
      </SafeAreaView>
    </View>
  );
}

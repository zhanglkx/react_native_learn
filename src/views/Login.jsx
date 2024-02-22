import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import {Button} from 'react-native-paper';
import {useNavigation} from '@react-navigation/native';

export default function Login() {
  const navigator = useNavigation();

  const gotoHome = () => {
    navigator.navigate('Change');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.textStyle}>Login</Text>

      <Button
        icon="camera"
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textStyle: {
    fontSize: 40,
    width: 100,
    height: 50,
    color: 'red',
    fontWeight: 'bold',
  },
  buttonStyle: {
    fontSize: 20,
    width: 100,
    height: 50,
    color: 'red',
    backgroundColor: 'blue',
    fontWeight: 'bold',
  },
});

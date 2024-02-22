import {View, SafeAreaView} from 'react-native';
import React from 'react';
import {Button, Text, TextInput} from 'react-native-paper';
import {useNavigation} from '@react-navigation/native';
import {Image} from 'react-native';

// import {getNavHeight} from '../../utils/deviceInfo';

import styles from './style/style';

const Left = () => {
  return <Text>Left</Text>;
};

export default function Login() {
  const navigator = useNavigation();
  const [text, setText] = React.useState('');
  const gotoHome = () => {
    navigator.navigate('Change');
  };

  return (
    <View style={styles.container}>
      <SafeAreaView>
        <Image style={styles.icon} source={require('./Image/icon.png')} />

        <Text style={styles.textStyle}>安全密码</Text>

        <TextInput
          label=""
          textColor="#f5f5"
          left={Left}
          value={text}
          mode="outlined"
          placeholder="输入密码"
          style={styles.inputStyle}
          onChangeText={text1 => setText(text1)}
        />

        <Button mode="text" style={styles.buttonStyle} onPress={gotoHome}>
          进入应用
        </Button>
      </SafeAreaView>
    </View>
  );
}

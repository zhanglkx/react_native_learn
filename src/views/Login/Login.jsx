import {View, SafeAreaView} from 'react-native';
import React from 'react';
import {Button, Text, TextInput} from 'react-native-paper';
import {useNavigation} from '@react-navigation/native';
import {Image} from 'react-native';
import {useTheme} from 'react-native-paper';
// import {getNavHeight} from '../../utils/deviceInfo';
import Toast, {DURATION} from 'react-native-easy-toast';
import styles from './style/style';
import {background} from 'native-base/lib/typescript/theme/styled-system';

const Left = () => {
  return <Text>Left</Text>;
};

export default function Login() {
  const navigator = useNavigation();
  const [text, setText] = React.useState('');
  const {colors} = useTheme();

  const toastRef = React.useRef();

  const gotoHome = () => {
    if (text === '123456') {
      navigator.navigate('Change');
    } else {
      console.log('密码错误');
    }
  };

  return (
    <View style={styles.container}>
      <SafeAreaView>
        <Image style={styles.icon} source={require('./Image/icon.png')} />

        <Text style={styles.textStyle}>安全密码</Text>

        <TextInput
          secureTextEntry={true}
          textColor={colors.myOwnColor}
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
        <Button
          style={{backgroundColor: 'red'}}
          title="Show Toast"
          onPress={() => toastRef.current.show('hello world!')}
        />
        <Toast ref={toastRef} />
      </SafeAreaView>
    </View>
  );
}

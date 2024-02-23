import {
  View,
  SafeAreaView,
  Touchable,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from 'react-native';
import React from 'react';
import {Button, Text, TextInput} from 'react-native-paper';
import {useNavigation} from '@react-navigation/native';
import {Image} from 'react-native';
import {useTheme} from 'react-native-paper';
// import {getNavHeight} from '../../utils/deviceInfo';
import Toast from 'react-native-easy-toast';
import styles from './style/style';

// const Left = () => {
//   return <Text>Left</Text>;
// };

export default function Login() {
  const navigator = useNavigation();
  const [text, setText] = React.useState('');

  const {colors} = useTheme();
  const toastRef = React.useRef();
  const textInputRef = React.useRef(null);

  const gotoHome = () => {
    if (text === '1') {
      navigator.navigate('Home');
    } else {
      toastRef.current.show('hello world!');
    }
  };

  const removeFocus = () => {
    textInputRef.current?.blur();
  };

  return (
    <View style={styles.container}>
      <SafeAreaView>
        <TouchableWithoutFeedback onPress={removeFocus}>
          <View style={{width: '100%', height: '100%'}} onPress={removeFocus}>
            <Image style={styles.icon} source={require('./Image/icon.png')} />

            <Text style={styles.textStyle}>安全密码</Text>

            <TextInput
              ref={textInputRef}
              secureTextEntry={true}
              textColor={colors.myRedColor}
              value={text}
              mode="outlined"
              placeholder="输入密码"
              style={styles.inputStyle}
              outlineStyle={styles.inputBorderStyle}
              outlineColor={colors.myRedColor}
              activeOutlineColor={colors.myRedColor}
              onChangeText={text1 => setText(text1)}
            />

            <Button
              mode="text"
              labelStyle={styles.buttonLabelStyle}
              label="进入应用"
              style={styles.buttonStyle}
              onPress={gotoHome}>
              进入应用
            </Button>
            <Toast
              ref={toastRef}
              position="center"
              fadeInDuration={750}
              fadeOutDuration={3000}
            />
          </View>
        </TouchableWithoutFeedback>
      </SafeAreaView>
    </View>
  );
}

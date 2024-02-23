import {
  View,
  SafeAreaView,
  TouchableWithoutFeedback,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {Button, Text, TextInput} from 'react-native-paper';
import {useNavigation} from '@react-navigation/native';
import {Image} from 'react-native';
import {useTheme} from 'react-native-paper';
// import {getNavHeight} from '../../utils/deviceInfo';
import Toast from 'react-native-easy-toast';
import styles from './style/style';
// import {Icon, MD3Colors} from 'react-native-paper';
// import Ionicons from 'react-native-vector-icons/Ionicons';
import Icon from 'react-native-vector-icons/Feather';

export default function Login() {
  const navigator = useNavigation();
  const [text, setText] = React.useState('');

  const [isPasswordVisible, setIsPasswordVisible] = React.useState(false);

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

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  return (
    <View style={styles.container}>
      <SafeAreaView>
        <TouchableWithoutFeedback onPress={removeFocus}>
          <View style={styles.blankViewStyle} onPress={removeFocus}>
            <Image style={styles.icon} source={require('./Image/icon.png')} />
            <Text style={styles.textStyle}>安全密码</Text>
            {/* 输入框 */}
            <View style={styles.inputAreaStyle}>
              <TextInput
                ref={textInputRef}
                secureTextEntry={!isPasswordVisible}
                textColor={colors.myRedColor}
                value={text}
                mode="outlined"
                placeholder="输入密码"
                style={styles.inputStyle}
                outlineStyle={styles.inputBorderStyle}
                outlineColor={colors.myRedColor}
                activeOutlineColor={colors.myRedColor}
                onChangeText={text1 => setText(text1)}
                // left={<TextInput.Affix text="#" />}
                right={
                  <TextInput.Icon
                    icon={isPasswordVisible ? 'eye-off' : 'eye'}
                    color={colors.myRedColor}
                    onPress={() => {
                      togglePasswordVisibility('flatLeftIcon');
                    }}
                  />
                }
              />

              {/* <Text style={styles.secretIconStyle}>
                <Icon name="eye" size={20} color="#f00" />
              </Text> */}
            </View>
            {/* 确定按钮 */}
            <Button
              mode="text"
              labelStyle={styles.buttonLabelStyle}
              label="进入应用"
              style={styles.buttonStyle}
              onPress={gotoHome}>
              进入应用
            </Button>
            {/* toast */}
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

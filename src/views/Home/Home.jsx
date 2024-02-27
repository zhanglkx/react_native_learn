import React, {useState} from 'react';
import {View, TouchableOpacity} from 'react-native';

import {NativeModules} from 'react-native';

import {TextInput, Icon, Text} from 'react-native-paper';
import styles from './style';

const PasswordInput = () => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  const CalendarManager = NativeModules.CalendarManager;
  CalendarManager.addEvent(
    'Birthday Party',
    '4 Privet Drive, Surrey-哈哈哈哈我实现原生混编啦',
  );

  return (
    <View style={{flexDirection: 'row', alignItems: 'center'}}>
      <TextInput
        mode="outlined"
        label="Password"
        secureTextEntry={!isPasswordVisible}
        right={
          <TouchableOpacity onPress={togglePasswordVisibility}>
            {/* <Icon name={isPasswordVisible ? 'eye-off' : 'eye'} /> */}
            <Text style={{fontSize: 12, width: 12, height: 12}}>11111</Text>
          </TouchableOpacity>
        }
      />
    </View>
  );
};

export default PasswordInput;

import React, {useState} from 'react';
import {View, TouchableOpacity} from 'react-native';
import {TextInput, Icon, Text} from 'react-native-paper';

const PasswordInput = () => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

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

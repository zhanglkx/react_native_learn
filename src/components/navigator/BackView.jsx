import {useNavigation} from '@react-navigation/native';
import {TouchableOpacity, Image} from 'react-native';
import * as React from 'react';
import styles from './style';

const BackComponent = () => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity onPress={() => navigation.goBack()}>
      {/* <Text style={styles.title}>自定义返回按钮</Text> */}
      <Image
        source={require('../../assets/images/common_icon_back.png')}
        style={styles.container}
      />
    </TouchableOpacity>
  );
};

export default BackComponent;

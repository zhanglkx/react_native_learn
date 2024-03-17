import {View, Image, Text} from 'react-native';
import React from 'react';
import styles from './styles';

const FuncItem = ({title}) => {
  return (
    <View style={styles.container}>
      <Image
        source={require('../../../assets/images/common_icon_back.png')}
        style={styles.image}
      />
      <View style={styles.content}>
        <Text style={styles.mainTitle}>{title}</Text>

        <Text style={styles.subTitle}>功能描述</Text>
      </View>
      <Image
        source={require('../../../assets/images/common_icon_back.png')}
        style={styles.image}
      />
    </View>
  );
};

export default FuncItem;

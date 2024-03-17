import {View, Image, Text, TouchableOpacity, Alert} from 'react-native';
import React from 'react';
import styles from './styles';
import {useNavigation} from '@react-navigation/native';

const FuncItem = props => {
  const navigator = useNavigation();

  const clickItem = item => {
    navigator.navigate(item);
  };

  return (
    <TouchableOpacity
      style={styles.main}
      onPress={() => {
        clickItem(props.item.router);
      }}>
      <View style={styles.container}>
        <Image
          source={require('../../../assets/images/圣诞球.png')}
          style={styles.image}
        />
        <View style={styles.content}>
          <Text style={styles.mainTitle}>{props.item.title}</Text>

          <Text style={styles.subTitle}>功能描述:{props.item.desc}</Text>
        </View>
        <Image
          source={require('../../../assets/images/星星.png')}
          style={styles.image}
        />
      </View>
    </TouchableOpacity>
  );
};

export default FuncItem;

import {View, Image, Text, TouchableOpacity, Alert} from 'react-native';
import React from 'react';
import styles from './styles';
import {useNavigation} from '@react-navigation/native';

const FuncItem = props => {
  const navigator = useNavigation();
  console.log(props);

  const clickItem = item => {
    console.log(item);
    navigator.navigate(item);
    // navigator.navigate('Home');
  };

  return (
    <TouchableOpacity
      style={styles.main}
      onPress={() => {
        clickItem(props.item.router);
      }}>
      <View style={styles.container}>
        <Image
          source={require('../../../assets/images/common_icon_back.png')}
          style={styles.image}
        />
        <View style={styles.content}>
          <Text style={styles.mainTitle}>{props.item.title}</Text>

          <Text style={styles.subTitle}>功能描述</Text>
        </View>
        <Image
          source={require('../../../assets/images/common_icon_back.png')}
          style={styles.image}
        />
      </View>
    </TouchableOpacity>
  );
};

export default FuncItem;

import {View, Button, Alert} from 'react-native';
import React from 'react';

export default function BaseButton() {
  return (
    <View>
      <Button
        title="原生组件按钮"
        onPress={() => {
          alert('这是一个按钮');
        }}
      />

      <Button
        title="原生组件按钮"
        onPress={() => {
          Alert.alert('这是一个按钮');
        }}
        color={'#000000'}
      />

      <Button title="两个按钮的弹窗" onPress={alertMsg} color={'#1878EB'} />
      <Button
        title="三个按钮的弹窗"
        onPress={alertMsgThree}
        color={'#1878EB'}
      />
    </View>
  );
}

const alertMsg = () => {
  Alert.alert(
    '标题',
    '内容',
    [
      {
        text: '取消',
        onPress: () => console.log('取消按钮被点击了'),
        style: 'destructive',
      },
      {
        text: '确定',
        onPress: () => console.log('确定按钮被点击了'),
        style: 'default',
      },
    ],
    {cancelable: false},
  );
};

const alertMsgThree = () => {
  Alert.alert(
    '标题',
    '内容',
    [
      {
        text: '取消',
        onPress: () => console.log('取消按钮被点击了'),
        style: 'destructive',
      },
      {
        text: '确定',
        onPress: () => console.log('确定按钮被点击了'),
        style: 'default',
      },
      {
        text: '稍后再试',
        onPress: () => console.log('稍后再试按钮被点击了'),
        style: 'default',
      },
    ],
    {cancelable: false},
  );
};

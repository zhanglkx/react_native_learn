/* eslint-disable no-unused-vars */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/react-in-jsx-scope */
// StackRouter.js

import * as React from 'react';
import {Button, View, Text, Image, StyleSheet} from 'react-native';

import {createNativeStackNavigator} from '@react-navigation/native-stack';

// 用于配置堆栈路由的管理；它返回了包含两个组件的对象：Screen和Navigator，他们都是配置导航器所需的React组件，
// 其中Screen组件是一个高阶组件，会增强props；在使用的页面中，会携带navigation对象和route对象
const Stack = createNativeStackNavigator();

function HomeScreen() {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Home Screen</Text>
    </View>
  );
}

function ListScreen() {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>ListScreen Screen</Text>
    </View>
  );
}

function DetailScreen() {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>DetailScreen Screen</Text>
    </View>
  );
}

export default function StackRouter() {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: '首页',
          headerStyle: {
            height: 80,
            backgroundColor: '#2196F3',
          },
        }}
      />
      <Stack.Screen name="List" component={ListScreen} />
      <Stack.Screen name="Detail" component={DetailScreen} />
    </Stack.Navigator>
  );
}

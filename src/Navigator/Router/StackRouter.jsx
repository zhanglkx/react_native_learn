/* eslint-disable no-unused-vars */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/react-in-jsx-scope */
// StackRouter.js

import * as React from 'react';
import {Button, View, Text, Image, StyleSheet} from 'react-native';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {useNavigation} from '@react-navigation/native';

// 用于配置堆栈路由的管理；它返回了包含两个组件的对象：Screen和Navigator，他们都是配置导航器所需的React组件，
// 其中Screen组件是一个高阶组件，会增强props；在使用的页面中，会携带navigation对象和route对象
const Stack = createNativeStackNavigator();

function HomeScreen({navigation, route}) {
  React.useEffect(() => {
    if (route.params?.post) {
      // Post updated, do something with `route.params.post`
      // For example, send the post to the server
      setTitle('useEffect执行');
    }
  }, [route.params?.post]);

  const [title, setTitle] = React.useState('');

  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Button
        title="跳转到 List"
        onPress={() =>
          navigation.navigate('List', {
            id: 86,
            otherParam: 'anything you want here',
          })
        }
      />
      <Text style={{margin: 10}}>Post: {route.params?.post}</Text>
      <Text style={{margin: 10}}>title: {title}</Text>
    </View>
  );
}

function ListScreen({navigation, route}) {
  const {id, otherParam} = route.params;
  React.useEffect(() => {
    if (id) {
      // Post updated, do something with `route.params.post`
      // For example, send the post to the server
      setTitle('useEffect执行');
    }
  }, [id]);

  const changeParam = () => {
    navigation.setParams({
      otherParam: 'someText',
    });
  };

  const backToTop = () => {
    navigation.popToTop();
  };
  const [title, setTitle] = React.useState('');

  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Button
        title="跳转到 Detail"
        onPress={() => navigation.navigate('Detail')}
      />
      <Text style={{margin: 10}}>Post: {id}</Text>
      <Text style={{margin: 10}}>Post: {otherParam}</Text>
      <Text style={{margin: 10}}>title: {title}</Text>
      <Button title="Change param" onPress={changeParam} />
      <Button title="backToTop" onPress={backToTop} />
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

const TitleView = () => {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text style={{margin: 10}}>title1: </Text>
    </View>
  );
};

const headerTitleComponent = () => <TitleView />;

const RightView = ({navigation, route}) => {
  const nav = useNavigation();
  console.log(route);
  return (
    <View>
      <Button
        title="Right"
        color={'#888888'}
        onPress={() => nav.navigate('Detail')}
      />
    </View>
  );
};

const RightViewComponent = () => <RightView />;

export default function StackRouter() {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{headerTintColor: 'red'}}>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={({navigation, route}) => {
          return {
            title: '首页',
            headerStyle: {
              height: 80,
              backgroundColor: '#2196F3',
            },
            headerTitle: headerTitleComponent,
            headerRight: RightViewComponent,
            headerShown: true,
            headerTitleAlign: 'center',
            headerTitleStyle: {
              color: '#fff',
            },
            headerBackTitle: '返回',
            headerBackTitleStyle: {
              color: '#fff',
            },
          };
        }}
      />
      <Stack.Screen
        name="List"
        component={ListScreen}
        options={({navigation, route}) => {
          return {
            headerShown: false,
            headerTitleAlign: 'center',
            headerTitleStyle: {
              color: '#fff',
            },
            headerBackTitle: '返回',
            headerBackTitleStyle: {
              color: '#fff',
            },
          };
        }}
      />
      <Stack.Screen name="Detail" component={DetailScreen} />
    </Stack.Navigator>
  );
}

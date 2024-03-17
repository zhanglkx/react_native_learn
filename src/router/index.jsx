import * as React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Login from '../views/Login/Login';
import Home from '../views/Home/Home';
import Passwd from '../views/Passwd/Passwd';
import Change from '../views/Change/Change';
import BackComponent from '../components/navigator/BackView';
import About from '../views/About/About';
import FunctionList from '../views/functionList/FunctionList';
import WebViewComponent from '../views/WebView/webView';
import Animated from '../views/Animated/Animated';
import Picker from '../views/PickerComponent/Picker';
import Swiper from '../views/Swiper/Swiper';
import AsyncStorage from '../views/AsyncStorage/AsyncStorage';
import Geolocation from '../views/Geolocation/Geolocation';
const Stack = createNativeStackNavigator();

const Index = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name=" FunctionList"
        component={FunctionList}
        screenOptions={{
          headerShown: false,
          title: '功能列表',
        }}
      />
      <Stack.Screen
        name="WebViewComponent"
        component={WebViewComponent}
        screenOptions={{
          headerShown: false,
          title: 'WebViewComponent',
        }}
      />

      <Stack.Screen
        name="Picker"
        component={Picker}
        screenOptions={{
          headerShown: false,
          title: 'Picker',
        }}
      />

      <Stack.Screen
        name="Animated"
        component={Animated}
        screenOptions={{
          headerShown: false,
          title: 'Animated',
        }}
      />
      <Stack.Screen
        name="Login"
        component={Login}
        screenOptions={{
          headerShown: false,
          title: '登录',
        }}
      />
      <Stack.Screen
        name="Home"
        component={Home}
        screenOptions={{
          title: '主页',
          // headerBackTitle: '',
          // headerBackTitleVisible: false,
          // headerBackImageSource: require('../assets/images/Security/SecurityBox.svg'),
          // headerBackImageStyle: {marginLeft: 10},
          headerLeft: BackComponent,
        }}
      />
      <Stack.Screen
        name="Passwd"
        component={Passwd}
        screenOptions={{title: '密码'}}
      />
      <Stack.Screen name="About" component={About} options={{title: '关于'}} />
      <Stack.Screen
        name="Change"
        component={Change}
        screenOptions={{title: '修改入口密码'}}
      />

      <Stack.Screen
        name="Swiper"
        component={Swiper}
        screenOptions={{headerShown: false}}
      />
      <Stack.Screen
        name="AsyncStorage"
        component={AsyncStorage}
        screenOptions={{headerShown: false}}
      />
      <Stack.Screen
        name="Geolocation"
        component={Geolocation}
        screenOptions={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default Index;

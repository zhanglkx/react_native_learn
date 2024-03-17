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

const Stack = createNativeStackNavigator();

const Index = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name=" FunctionList"
        component={FunctionList}
        options={{
          headerShown: false,
          title: '功能列表',
        }}
      />
      <Stack.Screen
        name="WebViewComponent"
        component={WebViewComponent}
        options={{
          headerShown: false,
          title: 'WebViewComponent',
        }}
      />
      <Stack.Screen
        name="Login"
        component={Login}
        options={{
          headerShown: false,
          title: '登录',
        }}
      />
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
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
        options={{title: '密码'}}
      />
      <Stack.Screen name="About" component={About} options={{title: '关于'}} />
      <Stack.Screen
        name="Change"
        component={Change}
        options={{title: '修改入口密码'}}
      />
    </Stack.Navigator>
  );
};

export default Index;

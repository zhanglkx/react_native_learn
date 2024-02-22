/* eslint-disable react-native/no-inline-styles */
import * as React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Login from '../views/Login/Login';
import Home from '../views/Home/Home';
import Passwd from '../views/Passwd/Passwd';
import Change from '../views/Change/Change';

import {StatusBar, View} from 'react-native';

const Stack = createNativeStackNavigator();

const index = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Login"
        component={Login}
        options={{
          headerShown: false,
          title: '登录',
          //   headerTitleStyle: {
          //     color: 'white',
          //   },
          //   headerTintColor: 'white',
          //   headerTitleAlign: 'center',
          //   headerStyle: {
          //     backgroundColor: 'transparent',
          //   },
          //   headerBackground: () => (
          //     <View style={{backgroundColor: 'transparent'}} />
          //   ),
        }}
      />
      <Stack.Screen
        name="Passwd"
        component={Passwd}
        options={{title: '密码'}}
      />
      <Stack.Screen
        name="Change"
        component={Change}
        options={{title: '修改入口密码'}}
      />
    </Stack.Navigator>
  );
};

export default index;

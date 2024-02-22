import * as React from 'react';
import {View} from 'react-native';

import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Login from '../views/Login';
import Home from '../views/Home';
import Passwd from '../views/Passwd';
import Change from '../views/Change';

const Stack = createNativeStackNavigator();

const index = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Login"
        component={Login}
        options={{headerShown: false}}
      />
      <Stack.Screen name="Home" component={Home} options={{title: '首页'}} />
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

import * as React from 'react';
import {TouchableOpacity, Text, Image} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {useNavigation} from '@react-navigation/native';
import Login from '../views/Login/Login';
import Home from '../views/Home/Home';
import Passwd from '../views/Passwd/Passwd';
import Change from '../views/Change/Change';

const Stack = createNativeStackNavigator();

const Index = () => {
  return (
    <Stack.Navigator>
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
      <Stack.Screen
        name="Change"
        component={Change}
        options={{title: '修改入口密码'}}
      />
    </Stack.Navigator>
  );
};

const BackComponent = () => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity onPress={() => navigation.goBack()}>
      {/* <Text>自定义返回按钮</Text> */}
      <Image
        source={require('../assets/images/ansck.png')}
        style={{width: 40, height: 40, marginLeft: 10}}
      />
    </TouchableOpacity>
  );
};

export default Index;

/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable react-native/no-inline-styles */
// 用于编写底部导航栏的相关代码
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {
  BottomNavigation,
  BottomNavigationTab,
  Layout,
  Text,
} from '@ui-kitten/components';

// screens
// import AccountScreen from "../screens/Account";

const HomeScreen = props => {
  return (
    <Layout style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Home Screen</Text>
    </Layout>
  );
};

const HomeStack = createNativeStackNavigator();

const HomeStackScreen = () => {
  return (
    <HomeStack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
      }}>
      <HomeStack.Screen name="Home" component={HomeScreen} />
    </HomeStack.Navigator>
  );
};

const AccountScreen = props => {
  return (
    <Layout style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Account Screen</Text>
    </Layout>
  );
};

const AccountStack = createNativeStackNavigator();

const AccountStackScreen = () => {
  return (
    <AccountStack.Navigator
      initialRouteName="Account"
      screenOptions={{
        headerShown: false,
      }}>
      <AccountStack.Group>
        <AccountStack.Screen name="Account" component={AccountScreen} />
      </AccountStack.Group>
    </AccountStack.Navigator>
  );
};

const BottomTabBar = ({navigation, state}) => (
  <BottomNavigation
    selectedIndex={state.index}
    appearance="noIndicator"
    onSelect={index => navigation.navigate(state.routeNames[index])}>
    <BottomNavigationTab
      title="Home"
      icon={props => <Text>Account Screen</Text>}
    />
    <BottomNavigationTab title="Account" icon={props => <Text>1111</Text>} />
  </BottomNavigation>
);

const TabNavigator = createBottomTabNavigator();
const TabNavigatorScreen = () => {
  return (
    <TabNavigator.Navigator tabBar={props => <BottomTabBar {...props} />}>
      <TabNavigator.Screen name="HomeStackScreen" component={HomeStackScreen} />
      <TabNavigator.Screen
        name="AccountStackScreen"
        component={AccountStackScreen}
      />
    </TabNavigator.Navigator>
  );
};

export default TabNavigatorScreen;

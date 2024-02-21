/* eslint-disable react/no-unstable-nested-components */
import Ionicons from 'react-native-vector-icons/Ionicons';

import * as React from 'react';
import {Button, View, Text, Image, StyleSheet} from 'react-native';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

function HomeScreen({navigation, route}) {
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
    </View>
  );
}

function ListScreen({navigation, route}) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Button
        title="ListScreen"
        onPress={() =>
          navigation.navigate('List', {
            id: 86,
            otherParam: 'anything you want here',
          })
        }
      />
    </View>
  );
}

export default function TabNavigatorScreen() {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray',
        tabBarIcon: ({focused, color, size}) => {
          let iconName;
          if (route.name === 'Home') {
            iconName = focused ? 'home' : 'home-outline';
          }
          if (route.name === 'List') {
            iconName = focused ? 'list-circle' : 'list-circle-outline';
          }
          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="List" component={ListScreen} />
    </Tab.Navigator>
  );
}

/* eslint-disable no-unused-vars */
/* eslint-disable react-native/no-inline-styles  */
/* eslint-disable react/no-unstable-nested-components */
import Ionicons from 'react-native-vector-icons/Ionicons';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import * as React from 'react';
import {Button, View, Text, Image, StyleSheet} from 'react-native';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

function HomeScreen({navigation, route}) {
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'red',
      }}>
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
          navigation.navigate('Detail', {
            id: 86,
            otherParam: 'anything you want here',
          })
        }
      />
    </View>
  );
}

function Detail({navigation, route}) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text> Detail </Text>
    </View>
  );
}

// export default function TabNavigatorScreen() {
//   return (
//     <Tab.Navigator
//       screenOptions={({route}) => ({
//         tabBarActiveTintColor: 'black',
//         tabBarInactiveTintColor: 'gray',
//         tabBarIcon: ({focused, color, size}) => {
//           let iconName;
//           if (route.name === 'Home') {
//             iconName = focused ? 'home' : 'home-outline';
//           }
//           if (route.name === 'List') {
//             iconName = focused ? 'list-circle' : 'list-circle-outline';
//           }
//           return <Ionicons name={iconName} size={size} color={color} />;
//         },
//       })}>
//       <Tab.Screen
//         name="Home"
//         component={HomeScreen}
//         options={{tabBarBadge: 3}}
//       />
//       <Tab.Screen name="List" component={ListScreen} />
//     </Tab.Navigator>
//   );

// const Tab = createBottomTabNavigator();

const ListStack = createNativeStackNavigator();

function ListStackScreen() {
  return (
    <ListStack.Navigator>
      <ListStack.Screen name="List" component={ListScreen} />
      <ListStack.Screen name="Detail" component={Detail} />
    </ListStack.Navigator>
  );
}

export default function TabStackRouter({navigation}) {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarActiveTintColor: 'pink',
        tabBarInactiveTintColor: 'gray',
        tabBarActiveBackgroundColor: 'yellow',
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
        tabBarBackground: () => (
          <View
            style={{backgroundColor: 'pink', width: '100%', height: '100%'}}
          />
        ),
        tabBarStyle: () => <View style={{backgroundColor: 'black'}} />,
      })}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{headerShown: false, tabBarActiveBackgroundColor: 'red'}}
      />
      <Tab.Screen
        name="ListStack"
        component={ListStackScreen}
        options={{
          headerShown: false,
        }}
      />
      <Tab.Screen name="List" component={ListScreen} />
    </Tab.Navigator>
  );
}

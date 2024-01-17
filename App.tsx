/* eslint-disable react-native/no-inline-styles */
// In App.js in a new project

import * as React from 'react';
import {View, Text, Button} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from './src/Navigator/HomeScreen/HomeScreen';
import DetailsScreen from './src/Navigator/DetailsScreen/DetailsScreen';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{title: 'Overview'}}
        />
        <Stack.Screen
          name="Details"
          component={DetailsScreen}
          initialParams={{itemId: 42, otherParam: 'itemId'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

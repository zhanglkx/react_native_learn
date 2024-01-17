/* eslint-disable react-native/no-inline-styles */
import * as React from 'react';
// import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import FlexDirection from './src/FlexBox/FlexDirection';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="FlexDirection" component={FlexDirection} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

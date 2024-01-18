/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/no-unstable-nested-components */
import * as React from 'react';
import {View, Text, Image, Button, StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

function HomeScreen() {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Home Screen</Text>
    </View>
  );
}

function LogoTitle() {
  return (
    <View
      style={{
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        margin: 0,
        padding: 0,
      }}>
      <Button title="左侧导航栏" style={styles.lefyStyle} />

      <Image
        style={styles.centerStyle}
        source={require('./src/assets/images/elk.png')}
      />
      <Button title="左侧导航栏" style={{fontSize: 20}} />
    </View>
  );
}

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{headerTitle: props => <LogoTitle {...props} />}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  lefyStyle: {
    textAlign: 'left',
    fontSize: 20,
    borderColor: 'red',
    borderWidth: 1,
    backgroundColor: 'red',
  },
  centerStyle: {
    textAlign: 'left',
    fontSize: 20,
    borderColor: 'red',
    borderWidth: 1,
    width: 40,
    height: 40,
  },
  rightStyle: {
    textAlign: 'left',
    fontSize: 20,
    borderColor: 'red',
    borderWidth: 1,
  },
});
export default App;

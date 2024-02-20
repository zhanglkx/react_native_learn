/* eslint-disable react-native/no-inline-styles */
import * as React from 'react';
import {Button, View, Text, Image, StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

function Profile({navigation}) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Profile Screen</Text>
      <Button
        onPress={() => navigation.navigate('EditPost')}
        title="Go to Edit Post"
      />
    </View>
  );
}

function EmptyScreen() {
  return <View />;
}

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function Home() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Profile" component={Profile} />
      <Tab.Screen name="Settings" component={EmptyScreen} />
    </Tab.Navigator>
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

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          //   options={{headerShown: false}}
          options={{headerTitle: props => <LogoTitle {...props} />}}
        />
        <Stack.Screen name="EditPost" component={EmptyScreen} />
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

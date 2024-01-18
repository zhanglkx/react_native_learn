/* eslint-disable react-native/no-inline-styles */
import * as React from 'react';
import {Button, View, Text, StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

function Home({navigation}) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Home Screen</Text>
      {/* 在不同的Stack.Group 之间跳转，实际上等同于 iOS 在不同的导航控制器之间跳转 */}
      <Button onPress={() => navigation.navigate('Help')} title="Go to Help" />
      <Button
        onPress={() => navigation.navigate('Profile')}
        title="Go to Profile"
      />
    </View>
  );
}

function Help({navigation}) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Help Screen</Text>
      <Button onPress={() => navigation.navigate('Home')} title="Go to Home" />
      <Button onPress={() => navigation.navigate('Invite')} title="Invite" />
    </View>
  );
}

function EmptyScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.centeredText}>这是一段居中的文字。</Text>
    </View>
  );
}

function Nav() {
  const isLoggedIn = true;
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {isLoggedIn ? (
          // Screens for logged in users
          <Stack.Group>
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Profile" component={EmptyScreen} />
          </Stack.Group>
        ) : (
          // Auth screens
          <Stack.Group screenOptions={{headerShown: false}}>
            <Stack.Screen name="SignIn" component={EmptyScreen} />
            <Stack.Screen name="SignUp" component={EmptyScreen} />
          </Stack.Group>
        )}
        {/* Common modal screens */}
        <Stack.Group screenOptions={{presentation: 'modal'}}>
          <Stack.Screen name="Help" component={Help} />
          <Stack.Screen name="Invite" component={EmptyScreen} />
        </Stack.Group>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const Stack = createNativeStackNavigator();

function App() {
  const isLoggedIn = true;
  return <Nav />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  centeredText: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    borderBlockColor: 'red',
    borderWidth: 1,
    color: 'red',
    // height: 200,
  },
});
export default App;

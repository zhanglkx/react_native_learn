import * as React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {NativeBaseProvider} from 'native-base';
import {NavigationContainer} from '@react-navigation/native';
import Router from './src/router/index';

const App = () => {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <NativeBaseProvider>
          <Router />
        </NativeBaseProvider>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default App;

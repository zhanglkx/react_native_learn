import * as React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
// import {NativeBaseProvider} from 'native-base';
import {NavigationContainer} from '@react-navigation/native';
import Router from './src/router/index';

const App = () => {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        {/* <NativeBaseProvider> */}
        {/*  NativeBaseProvider先注释掉，因为会提示警告说 react18 不再需要啥的*/}
        <Router />
        {/* </NativeBaseProvider> */}
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default App;

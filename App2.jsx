// import React from 'react';
// import * as eva from '@eva-design/eva';
// import {ApplicationProvider, Layout, Text} from '@ui-kitten/components';

// const HomeScreen = () => (
//   <Layout style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
//     <Text category="h1">HOME</Text>
//   </Layout>
// );

// export default () => (
//   <ApplicationProvider {...eva} theme={eva.light}>
//     <HomeScreen />
//   </ApplicationProvider>
// );

import React from 'react';
// import {ApplicationProvider} from '@ui-kitten/components'; // Provider
// import AppNavigator from './src/Navigator/Router/StackRouter'; // 导航
import AppNavigator from './src/Navigator/TabbarNav/TabRouter'; // 导航
// import {SafeAreaView} from 'react-native-safe-area-context'; // 安全边界
import {NavigationContainer} from '@react-navigation/native';

function App() {
  return (
    <NavigationContainer>
      <AppNavigator />
    </NavigationContainer>
  );
}

export default App;

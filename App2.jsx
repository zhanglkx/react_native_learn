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
// import * as eva from '@eva-design/eva';
import {ApplicationProvider} from '@ui-kitten/components'; // Provider
import AppNavigator from './src/navigator/AppNavigator'; // 导航
// import {default as theme} from './src/color/custom-theme.json'; // 如果没制作主题文件，可参考上一篇博文，或删除该段代码以及下方的theme变量使用
import {SafeAreaView} from 'react-native-safe-area-context'; // 安全边界

const App = () => {
  return (
    <ApplicationProvider>
      <SafeAreaView style={{flex: 1}}>
        <AppNavigator />
      </SafeAreaView>
    </ApplicationProvider>
  );
};

export default App;

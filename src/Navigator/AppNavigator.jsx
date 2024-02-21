// 用于export项目的整个导航
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import TabNavigatorScreen from './TabNavigation';

export default function () {
  return (
    <NavigationContainer>
      <TabNavigatorScreen />
    </NavigationContainer>
  );
}

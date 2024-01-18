import * as React from 'react';
// import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
// import FlexDirection from './src/FlexBox/FlexDirection';
// import BaseButton from './src//BaseComponents/BaseButton';
// import BaseSwitch from './src//BaseComponents/BaseSwitch';
// import BaseActivityIndicator from './src/BaseComponents/BaseActivityIndicator';
// import BaseImage from './src/BaseComponents/BaseImage';
import BaseTextInput from './src/BaseComponents/BaseTextInput';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {/* <Stack.Screen name="FlexDirection" component={FlexDirection} /> */}
        <Stack.Screen name="BaseActivityIndicator" component={BaseTextInput} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

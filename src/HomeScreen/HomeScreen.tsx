/* eslint-disable react-native/no-inline-styles */
import * as React from 'react';
import {Button, View, Text} from 'react-native';

export default function HomeScreen({navigation}) {
  console.log(navigation);
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Home Screen</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Details')}
      />
    </View>
  );
}

// ... other code from the previous section

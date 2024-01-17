/* eslint-disable react-native/no-inline-styles */
import * as React from 'react';
import {Button, View, Text} from 'react-native';
export default function DetailsScreen({navigation}) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Details Screen</Text>
      <Button
        title="Go to Details... again"
        onPress={() => navigation.push('Details')}
      />
    </View>
  );
}

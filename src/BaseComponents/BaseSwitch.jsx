import {StatusBar, StyleSheet, Switch, Text, View} from 'react-native';
import React, {useState} from 'react';
// import {Switch} from 'react-native-paper';

const BaseSwitch = () => {
  const [checked, setChecked] = useState(false);

  return (
    <View>
      <Text>BaseSwi1tch</Text>
      {/* backgroundColor仅安卓有效 */}
      <StatusBar
        hidden={checked}
        backgroundColor="red"
        barStyle={'dark-content'}
      />
      <Switch
        trackColor={{false: 'white', true: 'red'}}
        thumbColor={checked ? 'pink' : 'green'}
        ios_backgroundColor="purple"
        onValueChange={setChecked}
        value={checked}
      />
    </View>
  );
};

export default BaseSwitch;

const styles = StyleSheet.create({});

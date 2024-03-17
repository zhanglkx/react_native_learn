/*prettier/prettier */

/* eslint-disable react-native/no-inline-styles */
import {View, StyleSheet} from 'react-native';
import React, {Component} from 'react';
import {Picker} from '@react-native-picker/picker';

export default class Index extends Component {
  constructor() {
    super();
    this.state = {
      color: 'white',
    };
  }
  render() {
    return (
      <View style={[styles.container, {backgroundColor: this.state.color}]}>
        <Picker
          mode="dropdown" // 只在安卓下有效
          selectionColor="red"
          selectedValue={this.state.color}
          style={{height: 50, width: 160, fontSize: 15}}
          onValueChange={(itemValue, itemIndex) => {
            this.setState({color: itemValue});
          }}>
          <Picker.Item label="白色" value="white" />
          <Picker.Item label="红色" value="red" />
          <Picker.Item label="蓝色" value="blue" />

          <Picker.Item label="黄色" value="yellow" />
          <Picker.Item label="绿色" value="green" />
          <Picker.Item label="青色" value="cyan" />

          <Picker.Item label="紫色" value="purple" />
          <Picker.Item label="粉色" value="pink" />
          <Picker.Item label="黑色" value="black" />

          <Picker.Item label="灰色" value="gray" />
          <Picker.Item label="褐色" value="brown" />
          <Picker.Item label="棕色" value="tan" />

          <Picker.Item label="褐黑色" value="darkgray" />
          <Picker.Item label="深红色" value="darkred" />
          <Picker.Item label="深蓝色" value="darkblue" />

          <Picker.Item label="深黄色" value="darkyellow" />

          <Picker.Item label="深绿色" value="darkgreen" />
          <Picker.Item label="深青色" value="darkcyan" />
        </Picker>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

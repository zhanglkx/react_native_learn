import {StyleSheet, Text, View, SafeAreaView} from 'react-native';
import React from 'react';
import {WebView} from 'react-native-webview';
import {Dimensions} from 'react-native';
const WebViewComponent = () => {
  return (
    <SafeAreaView
      style={{
        height: Dimensions.get('window').height,
        width: Dimensions.get('window').width,
        backgroundColor: 'pink',
      }}>
      <Text>webVie1w</Text>
      {/* <WebView
        source={{uri: 'https://www.baidu.com'}}
        style={styles.container}
      /> */}
      {/* <WebView source={{uri: 'https://m.baidu.com'}} style={{marginTop: 20}} /> */}
      <WebView
        originWhitelist={['*']}
        source={{html: '<h1>Hello world</h1>'}}
      />
    </SafeAreaView>
  );
};

export default WebViewComponent;

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

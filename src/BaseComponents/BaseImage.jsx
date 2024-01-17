/* eslint-disable react-native/no-inline-styles */
import {
  View,
  Text,
  Image,
  Dimensions,
  ScrollView,
  StyleSheet,
} from 'react-native';
import React from 'react';

const BaseImage = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'pink',
      }}>
      <ScrollView>
        <Text>BaseImage</Text>

        <Image
          style={{
            backgroundColor: 'red',
            width: Dimensions.get('window').width / 2,
          }}
          source={require('../assets/images/ansck.png')}
        />
        <Image
          style={{
            backgroundColor: 'red',
            width: Dimensions.get('window').width / 2,
            height: Dimensions.get('window').width / 2,
          }}
          source={{
            uri: 'https://t7.baidu.com/it/u=1070121341,87043257&fm=193&f=GIF',
          }}
        />
        <Image
          style={styles.logo}
          source={{
            uri: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADMAAAAzCAYAAAA6oTAqAAAAEXRFWHRTb2Z0d2FyZQBwbmdjcnVzaEB1SfMAAABQSURBVGje7dSxCQBACARB+2/ab8BEeQNhFi6WSYzYLYudDQYGBgYGBgYGBgYGBgYGBgZmcvDqYGBgmhivGQYGBgYGBgYGBgYGBgYGBgbmQw+P/eMrC5UTVAAAAABJRU5ErkJggg==',
          }}
        />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
  },
  tinyLogo: {
    width: 50,
    height: 50,
  },
  logo: {
    width: 66,
    height: 58,
  },
});

export default BaseImage;

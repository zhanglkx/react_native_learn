/* eslint-disable react/react-in-jsx-scope */
import {Text, View, StyleSheet, Image} from 'react-native';
import viewdemo from '@/pages/views/viewdemo';

export default function AssetExample() {
  return (
    <View style={styles.container}>
      <viewdemo />
      <Text style={styles.paragraph}>
        Local files and assets can be imported by dragging and dropping them
        into the editor
      </Text>
      <Image
        style={styles.logo}
        source={require('../../assets/images/ansck.png')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
  },
  paragraph: {
    margin: 24,
    marginTop: 0,
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  logo: {
    height: 128,
    width: 128,
  },
});

import React from 'react';
import {SafeAreaView, FlatList, StyleSheet, StatusBar} from 'react-native';
import Item from './Item/FuncItem';
import styles from './styles/styles';

const DATA = [
  {
    name: 'Webview',
    title: 'Webview',
  },
  {
    name: 'camera',
    title: 'camera',
  },
];

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={({item}) => <Item title={item.title} />}
        keyExtractor={item => item.name}
      />
    </SafeAreaView>
  );
};

export default App;

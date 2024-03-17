import React from 'react';
import {
  SafeAreaView,
  FlatList,
  StyleSheet,
  View,
  StatusBar,
} from 'react-native';
import Item from './Item/FuncItem';
import styles from './styles/styles';

const DATA = [
  {
    name: 'Webview',
    title: 'Webview',
    router: 'WebViewComponent',
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
        renderItem={({item}) => <Item item={item} />}
        keyExtractor={item => item.name}
        ItemSeparatorComponent={SeparatorComponent}
      />
    </SafeAreaView>
  );
};

const SeparatorComponent = () => {
  return <View style={styles.itemSeparator} />;
};

export default App;

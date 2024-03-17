import React from 'react';
import {SafeAreaView, FlatList, View} from 'react-native';
import Item from './Item/FuncItem';
import styles from './styles/styles';

const DATA = [
  {
    name: 'Webview',
    title: 'Webview',
    router: 'WebViewComponent',
    desc: 'Webview component',
  },
  {
    name: 'Home',
    title: 'Home',
    router: 'Home',
    desc: 'Home page',
  },
  {
    name: 'Animated',
    title: 'Animated',
    router: 'Animated',
    desc: 'Animated component',
  },
  {
    name: 'Picker',
    title: 'Picker',
    router: 'Picker',
    desc: 'Picker component',
  },
  {
    name: 'Login',
    title: 'Login',
    router: 'Login',
    desc: 'Login page',
  },
  {
    name: 'Passwd',
    title: 'Passwd',
    router: 'Passwd',
    desc: 'Passwd component',
  },
  {
    name: 'Change',
    title: 'Change',
    router: 'Change',
    desc: 'Change component',
  },
  {
    name: 'Swiper',
    title: 'Swiper',
    router: 'Swiper',
    desc: 'Swiper component',
  },
  {
    name: 'AsyncStorage',
    title: 'AsyncStorage',
    router: 'AsyncStorage',
    desc: 'AsyncStorage component',
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

import React from 'react';
import {SafeAreaView, FlatList, View} from 'react-native';
import Item from './Item/FuncItem';
import styles from './styles/styles';
import DataList from './DataList';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={DataList}
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

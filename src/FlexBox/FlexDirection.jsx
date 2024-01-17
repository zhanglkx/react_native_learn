import {ScrollView, StyleSheet, Text, View, Dimensions} from 'react-native';
import React from 'react';

function TextField(props) {
  const {val, name} = props;
  return (
    <View style={[textFieldStyles.felx]}>
      <Text>
        {name}-{val}
      </Text>
    </View>
  );
}

function FlexDefault(props) {
  return (
    <View>
      <Text style={styles.h1}>FlexDirection</Text>
      <View style={[props.viewStyle]}>
        {Array(8)
          .fill(20)
          .map((item, i) => (
            <TextField name={props.title} val={i} />
          ))}
      </View>
    </View>
  );
}

function Flex() {
  return (
    <View>
      <ScrollView>
        <FlexDefault viewStyle={styles.felx} title="FlexDefault" />
        <FlexDefault viewStyle={styles.felxDirection} title="column-reverse" />
        <FlexDefault viewStyle={styles.row} title="row" />
        <FlexDefault viewStyle={styles.rowReverse} title="rowReverse" />
      </ScrollView>
    </View>
  );
}

export default Flex;

const styles = StyleSheet.create({
  felx: {
    display: 'flex',
  },
  felxDirection: {
    flexDirection: 'column-reverse',
    flexWrap: 'wrap',
  },
  row: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  rowReverse: {
    flexDirection: 'row-reverse',
    flexWrap: 'wrap',
  },
  h1: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    fontWeight: 'bold',
  },
});

const textFieldStyles = StyleSheet.create({
  felx: {
    borderColor: '#285019',
    borderWidth: 2,
    borderRadius: 4,
    padding: 2,
    margin: 3,
    width: 375,
    // width: Dimensions.get('window').width,
  },
});

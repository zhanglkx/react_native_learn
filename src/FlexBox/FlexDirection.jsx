import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

function TextField(props) {
  const {val, name} = props;
  return (
    <View style={[textFieldStyles.felx]}>
      <Text>
        Flex-{val}-{name}
      </Text>
    </View>
  );
}

const FlexDirection = () => {
  return (
    <View>
      <View>
        <View>
          <Text>Flex</Text>
          <View style={[styles.felx]}>
            {Array(10)
              .fill(20)
              .map((item, i) => (
                <TextField name="John" val={i} />
              ))}
          </View>
        </View>
      </View>
    </View>
  );
};

function Flex() {
  return (
    <View>
      <FlexDirection />
    </View>
  );
}

export default Flex;

const styles = StyleSheet.create({
  felx: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
});

const textFieldStyles = StyleSheet.create({
  felx: {
    borderColor: '#285019',
    borderWidth: 2,
    borderRadius: 4,
    padding: 2,
    margin: 3,
  },
});

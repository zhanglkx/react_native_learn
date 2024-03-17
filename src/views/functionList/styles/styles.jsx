import {StyleSheet} from 'react-native';
import colorManager from '../../../Theme/colors/color';
import {Dimensions} from 'react-native';
const styles = StyleSheet.create({
  container: {backgroundColor: colorManager.themeBgColor},
  itemSeparator: {
    borderBottomWidth: 0.4,
    borderBottomColor: 'gray',
  },
});
export default styles;
